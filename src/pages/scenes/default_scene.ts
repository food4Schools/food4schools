import { UrlManagement } from "src/components/UrlManagament";


$(document).on('knack-page-render.any', function (page, records, view, data) {
    const urlManagement = new UrlManagement();
    const nyResourcesTargetPageURL = 'https://drive.google.com/drive/folders/1uGgUkYLI31GQ3Ga8T8ni_Cn71vZTlEVd';
    // to add more links just find the href in the inspects and call this method again with the new link
    urlManagement.createExternalLink(nyResourcesTargetPageURL, '#ny-resources');
});