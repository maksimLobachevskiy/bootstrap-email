const BootstrapEmail = require('bootstrap-email');

const template = new BootstrapEmail('email.html');

// const template = new BootstrapEmail([
//     '<absolute-path-to-first-template>.html',
//     '<absolute-path-to-second-template>.html',
// ]);
//
// const template = new BootstrapEmail('<div class="container">...</div>'); 

template.compileAndSave('out.html');