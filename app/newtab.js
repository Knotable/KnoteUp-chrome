var DEFAULT_NEW_TAB = 'is-default-new-tab';
chrome.storage.local.get(DEFAULT_NEW_TAB, function(result){
  if (result[DEFAULT_NEW_TAB]){
    if (localStorage.openFromPopup !== 'true'){
      chrome.tabs.update({ url: "chrome-search://local-ntp/local-ntp.html" });
    } else {
      localStorage.openFromPopup = 'false';
    }
  }
});

$(document).ready(function(){
  var resetFrameSize = function(){
    var $iframe = $("iframe");
    var $window = $(window);
    $iframe.width($window.width());
    $iframe.height($window.height());
  };
  // resize iframe
  resetFrameSize();

  // resize iframe when screen size is changed.
  $(window).resize(resetFrameSize);

});
