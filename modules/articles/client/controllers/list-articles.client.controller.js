(function () {
  'use strict';

  angular
    .module('articles')
    .controller('ArticlesListController', ArticlesListController);

  ArticlesListController.$inject = ['ArticlesService'];

  function ArticlesListController(ArticlesService) {
    var vm = this;
    vm.imageJson = [{
      'imageUrl': '/modules/articles/client/images/8.jpg'
    }, {
      'imageUrl': '/modules/articles/client/images/1.jpg'
    },
    {
      'imageUrl': '/modules/articles/client/images/2.jpg'
    },
    {
      'imageUrl': '/modules/articles/client/images/3.jpg'
    },
    {
      'imageUrl': '/modules/articles/client/images/5.jpg'
    },
    {
      'imageUrl': '/modules/articles/client/images/6.jpg'
    },
    {
      'imageUrl': '/modules/articles/client/images/7.jpg'
    },
    {
      'imageUrl': '/modules/articles/client/images/7.jpg',
      'videoUrl': '/modules/articles/client/videos/c.mp4'
    },
    {
      'imageUrl': '/modules/articles/client/images/6.jpg',
      'videoUrl': '/modules/articles/client/videos/c.mp4'
    }];

    vm.videoJson = [{
      'imageUrl': '/modules/articles/client/images/7.jpg',
      'videoUrl': '/modules/articles/client/videos/c.mp4'
    },
    {
      'imageUrl': '/modules/articles/client/images/6.jpg',
      'videoUrl': '/modules/articles/client/videos/c.mp4'
    }];

    vm.articles = ArticlesService.query();

    vm.init = function() {
      $('#imageGallery').unitegallery({

        //
        // gallery_theme: 'slider',
        // gallery_theme: 'carousel',
        // gallery_theme: 'tilesgrid',
        // //tiles_type: 'nested',
        // gallery_theme: "video",
				// theme_skin: "right-no-thumb"
        gallery_theme: 'tiles',
        tiles_type: 'nested'
        // tiles_type: 'justified'
        // tiles_include_padding: true,
        // tile_enable_border: false,
        // tile_border_width: 3,
        // tile_border_color: '#F0F0F0',
        // tile_border_radius: 0,
        //
        // tile_enable_outline: false,
        // tile_outline_color: '#8B8B8B',
        //
        // tile_enable_shadow: true,
        // tile_shadow_h: 1,
        // tile_shadow_v: 1,
        // tile_shadow_blur: 3,
        // tile_shadow_spread: 2,
        // tile_shadow_color: '#8B8B8B'
      });
      $('#sliderGallery').unitegallery({
        gallery_theme: 'slider'
        // theme_panel_position: 'bottom'
      });
      $('#gridGallery').unitegallery({
        gallery_theme: 'grid',
        theme_panel_position: 'bottom'
      });
      $("#lightGallery").lightGallery();
    };

    setTimeout(function() {
      vm.init();
    }, 20);
  }
}());
