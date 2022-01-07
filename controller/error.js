exports.errorPage = (req, res, next) => {
    res.status(404).render("error", {pageTitle: "Error!"});
}