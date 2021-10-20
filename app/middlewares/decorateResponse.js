function decorateHtmlResponse(page_title, form='') {
  return function (req, res, next) {
    res.locals.title = `${page_title}`;
    res.locals.editForm = form;
    next();
  };
}



function decorateRouterResponse(router) {
  return function (req, res, next) {
    res.locals.router = `${router}`;

    next();
  };
}


module.exports = {
  decorateHtmlResponse,
  decorateRouterResponse,
};