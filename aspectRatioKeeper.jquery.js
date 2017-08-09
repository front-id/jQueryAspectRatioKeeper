/* ====================================================
 * jQuery Aspect Ratio Keeper.
 * https://github.com/frontid/jQueryAspectRatioKeeper
 * Marcelo Iván Tosco (capynet)
 * ==================================================== */
!function ($) {
  'use strict'

  var plugin

  var Class = function (el, options) {
    plugin = this
    this.$el = $(el)
    var defaults = {
      wrapperName: 'tag-ark'
    }
    this.options = $.extend(defaults, options)
    init()
    return this
  }

  // SECCIÓN DE MÉTODOS PRIVADOS
  //-----------------------------------------------------------
  function init () {
    var width = plugin.$el.width()
    var height = plugin.$el.height()

    var $wrapper = $('<div class="'+plugin.options.wrapperName+'">')

    $wrapper.css({
      position: 'relative',
      height: 0,
      paddingTop: ((height / width) * 100) + '%',
    })

    plugin.$el.css({
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%'
    });
    
    // El tag tambien necesita su CSS pero ya lo he puesto en _media.scss
    plugin.$el.wrap($wrapper)
  }

  // DEFINICIÓN DEL PLUGIN
  //-----------------------------------------------------------
  $.fn.aspectRatioKeeper = function (options) {
    return this.each(function () {
      var $element = $(this)
      var data = $element.data('aspectRatioKeeper')
      if (!data) {
        $element.data('aspectRatioKeeper', (new Class(this, options)))
      }
    })
  }

}(window.jQuery);

$('.sample').aspectRatioKeeper()
