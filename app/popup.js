$(document).ready(function(){

  chrome.tabs.query({active: true}, function(tabs){
    var newtab = _.findWhere(tabs, {url: "chrome://newtab/"});
    if (!newtab){
      localStorage.openFromPopup = 'true';
      chrome.tabs.create({url: 'chrome://newtab'})
    }
  });

  var DEFAULT_NEW_TAB = 'is-default-new-tab';
  chrome.storage.local.get(DEFAULT_NEW_TAB, function(result){
    $('.js-new-tab-option').attr('checked', !result[DEFAULT_NEW_TAB]);
  });

  $('.js-new-tab-option').change(function(event){
    var isDefaultNewTab = $(event.currentTarget).prop('checked');
    var option = {};
    option[DEFAULT_NEW_TAB] = !isDefaultNewTab;
    chrome.storage.local.set(option, function(){
      window.close();
    });
  });
});
