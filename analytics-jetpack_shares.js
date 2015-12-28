/**
 * Track Jetpack social shares as Google Analytics Social Interactions
 * https://github.com/gregoryfoster/jetpack-shares-as-google_analytics-social_interactions
 *
 * Adapted from:
 * https://gist.github.com/devinsays/e9a5a42c1416b16f8bae#file-tracking-js
 */
jQuery('document').ready(function($){
  if( typeof(ga) == 'function' ){
    let ajs-networks = [
      { network: 'Twitter',  selector: 'a.share-twitter' },
      { network: 'Facebook', selector: 'a.share-facebook' },
      { network: 'Google',   selector: 'a.share-google-plus-1' },
      { network: 'LinkedIn', selector: 'a.share-linkedin' },
      { network: 'Reddit',   selector: 'a.share-reddit' }
    ];

    // On click, send GA a Social Interaction message
    for( let target of ajs-networks ){
      $(target.selector).on('click', function() {
        ga('send', {
          hitType: 'social',
          socialNetwork: target.network,
          socialAction: 'share',
          socialTarget: $(this).attr('href').substr(0, $(this).attr('href').indexOf('?'))
        });
      });
    }
  }
})(jQuery);