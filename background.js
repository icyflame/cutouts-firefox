browser.contextMenus.create({
  id: "copy-link-to-clipboard",
  title: "Save this page to cutouts",
  contexts: ["selection"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copy-link-to-clipboard") {

    const pageLink = info.pageUrl;
    const quote = info.selectionText;
    const tags = [ ];
    const author = "";

    let baseUrl = "https://cutouts.siddharthkannan.in/users";

    let fullUrl = baseUrl + "?link=" +
                    encodeURIComponent(pageLink) + "&quote=" +
                    encodeURIComponent(quote);

    browser.tabs.create({
      url: fullUrl,
      active: false
    });
  }
});
