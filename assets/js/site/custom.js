/* --------------------------------------------------------------------------- */
/* Ajustes customizados (codigo proprio do site - edite aqui) */
/* Fonte original: assets/js/custom.js */
/* --------------------------------------------------------------------------- */
/*
  Arquivo livre para seus scripts.
  Use este arquivo para novas interacoes sem misturar codigo no index.html.
*/

(function(){
  function runScrambleFallback(element, options) {
    var text = options.text || element.textContent;
    var chars = options.chars || 'XO';
    var speed = options.speed || 0.3;
    var revealDelay = options.revealDelay || 0;
    var duration = options.duration || 1;
    var newClass = options.newClass;
    var startedAt = null;

    function randomChars(length) {
      var output = '';
      for (var i = 0; i < length; i++) {
        output += chars[Math.floor(Math.random() * chars.length)];
      }
      return output;
    }

    function tick(timestamp) {
      if (!startedAt) startedAt = timestamp;
      var elapsed = (timestamp - startedAt) / 1000;
      var revealProgress = Math.max(0, Math.min(1, (elapsed - revealDelay) / Math.max(duration - revealDelay, 0.01)));
      var revealedCount = Math.floor(text.length * revealProgress);
      var hiddenCount = text.length - revealedCount;

      element.textContent = text.slice(0, revealedCount) + randomChars(hiddenCount);

      if (elapsed < duration + speed) {
        window.requestAnimationFrame(tick);
      } else {
        element.textContent = text;
        if (newClass) element.classList.add(newClass);
      }
    }

    window.requestAnimationFrame(tick);
  }

  function initFollowTextScramble() {
    var element = document.querySelector('.scramble-follow-text');
    if (!element) return;

    var options = {
      text: 'SIGA-ME',
      chars: 'XO',
      revealDelay: 0.5,
      speed: 0.3,
      newClass: 'scramble-follow-text-done'
    };

    var play = function(){
      if (window.gsap) {
        try {
          gsap.to(element, {
            duration: 1,
            scrambleText: options
          });
          return;
        } catch (error) {
          runScrambleFallback(element, Object.assign({ duration: 1 }, options));
          return;
        }
      }
      runScrambleFallback(element, Object.assign({ duration: 1 }, options));
    };

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (!entry.isIntersecting) return;
          play();
          observer.disconnect();
        });
      }, { threshold: 0.6 });
      observer.observe(element);
    } else {
      play();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFollowTextScramble);
  } else {
    initFollowTextScramble();
  }
})();

(function(){
  function initWhatsAppChat() {
    var widget = document.querySelector('[data-whatsapp-chat]');
    if (!widget) return;

    var panel = widget.querySelector('[data-chat-panel]');
    var toggle = widget.querySelector('[data-chat-toggle]');
    var closeButton = widget.querySelector('[data-chat-close]');
    var form = widget.querySelector('[data-chat-form]');
    var input = widget.querySelector('[data-chat-input]');
    var messages = widget.querySelector('[data-chat-messages]');
    var quickButtons = widget.querySelectorAll('[data-chat-quick]');
    var whatsappUrl = 'https://wa.me/351000000000';
    var churchAddress = 'Rua do Contubo, 36, Amora';
    var churchMapsUrl = 'https://www.google.com/maps/search/?api=1&query=38.6297778,-9.1251667';

    function setOpen(isOpen) {
      panel.hidden = !isOpen;
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen && input) window.setTimeout(function(){ input.focus(); }, 80);
    }

    function addMessage(text, type, action) {
      var message = document.createElement('div');
      message.className = 'whatsapp-chat_message ' + (type === 'user' ? 'is-user' : 'is-bot');
      message.textContent = text;
      if (action && action.href && action.label) {
        var link = document.createElement('a');
        link.className = 'whatsapp-chat_message-action';
        link.href = action.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = action.label;
        message.appendChild(link);
      }
      messages.appendChild(message);
      messages.scrollTop = messages.scrollHeight;
    }

    function botReply(userText) {
      var text = userText.toLowerCase();
      var reply = 'Obrigado pela sua mensagem. Posso ajudar com horários, endereço, pedidos de oração ou encaminhar você para o WhatsApp da igreja.';
      var action = null;

      if (text.indexOf('horário') !== -1 || text.indexOf('horario') !== -1 || text.indexOf('culto') !== -1) {
        reply = 'Nossos cultos são aos domingos às 11h e sexta feira às 21h.';
      } else if (text.indexOf('endereço') !== -1 || text.indexOf('endereco') !== -1 || text.indexOf('morada') !== -1 || text.indexOf('localização') !== -1 || text.indexOf('localizacao') !== -1 || text.indexOf('mapa') !== -1 || text.indexOf('onde') !== -1) {
        reply = 'Estamos na ' + churchAddress + '.';
        action = {
          href: churchMapsUrl,
          label: 'Abrir no Google Maps'
        };
      } else if (text.indexOf('oração') !== -1 || text.indexOf('oracao') !== -1) {
        reply = 'Claro. Você pode escrever seu pedido aqui, e também pode falar diretamente com a igreja pelo WhatsApp.';
      } else if (text.indexOf('whatsapp') !== -1 || text.indexOf('pessoa') !== -1 || text.indexOf('alguém') !== -1 || text.indexOf('alguem') !== -1 || text.indexOf('contato') !== -1) {
        reply = 'Vou te direcionar para o WhatsApp da igreja. Se preferir, clique no link abaixo: Abrir WhatsApp da igreja.';
        window.setTimeout(function(){
          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        }, 900);
      }

      window.setTimeout(function(){
        addMessage(reply, 'bot', action);
      }, 650);
    }

    function submitMessage(text) {
      var message = text.trim();
      if (!message) return;
      addMessage(message, 'user');
      botReply(message);
    }

    toggle.addEventListener('click', function(){
      setOpen(panel.hidden);
    });

    closeButton.addEventListener('click', function(){
      setOpen(false);
    });

    form.addEventListener('submit', function(event){
      event.preventDefault();
      submitMessage(input.value);
      input.value = '';
    });

    quickButtons.forEach(function(button){
      button.addEventListener('click', function(){
        submitMessage(button.getAttribute('data-chat-quick') || button.textContent);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhatsAppChat);
  } else {
    initWhatsAppChat();
  }
})();

(function(){
  function initFooterReveal() {
    var footer = document.querySelector('#footer-section-container .site-footer');
    if (!footer) return;

    footer.style.opacity = '0';
    footer.style.transform = 'translateY(20px)';
    footer.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

    function revealFooter() {
      footer.style.opacity = '1';
      footer.style.transform = 'translateY(0)';
      footer.classList.add('is-visible');
    }

    window.setTimeout(revealFooter, 800);

    if (!('IntersectionObserver' in window)) {
      revealFooter();
      return;
    }

    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (!entry.isIntersecting) return;
        revealFooter();
        observer.disconnect();
      });
    }, { threshold: 0.1 });

    observer.observe(footer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooterReveal);
  } else {
    initFooterReveal();
  }
})();

