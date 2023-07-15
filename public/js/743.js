"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[743],{743:(r,o,e)=>{e.r(o),e.d(o,{default:()=>l});var s=e(757),t=e.n(s);function a(r){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},a(r)}function n(r,o,e,s,t,a,n){try{var i=r[a](n),l=i.value}catch(r){return void e(r)}i.done?o(l):Promise.resolve(l).then(s,t)}const i={name:"register",data:function(){return{name_error:null,email_error:null,password_error:null,password_confirmation_error:null}},methods:{register:function(r){var o,e=this;return(o=t().mark((function o(){var s,a,n,i,l;return t().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:r.preventDefault(),s=e.$refs.name.value,a=e.$refs.email.value,n=e.$refs.password.value,i=e.$refs.password_confirmation.value,l=e,e.axios.post("api/auth/register",{name:s,email:a,password:n,password_confirmation:i}).then((function(r){l.$router.push({name:"login"})})).catch((function(r){r.response?(console.log(r.response.data),l.showErrors(r.response.data)):r.request?console.log(r.request):console.error(r.message)}));case 7:case"end":return o.stop()}}),o)})),function(){var r=this,e=arguments;return new Promise((function(s,t){var a=o.apply(r,e);function i(r){n(a,s,t,i,l,"next",r)}function l(r){n(a,s,t,i,l,"throw",r)}i(void 0)}))})()},showErrors:function(r){if("undefined"!==a(r.errors))for(var o in r.errors)this.showFieldError(o,r.errors[o])},showFieldError:function(r,o){this[r+"_error"]=o.join("\n"),console.log(r,o)}}};const l=(0,e(900).Z)(i,(function(){var r=this,o=r.$createElement,e=r._self._c||o;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[r._v("Registre")]),r._v(" "),e("div",{staticClass:"card-body"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"login_name"}},[r._v("User")]),r._v(" "),e("input",{ref:"name",staticClass:"form-control",attrs:{type:"text",id:"login_name",placeholder:"Usuario",required:""}}),r._v(" "),e("small",{ref:"name_error",staticClass:"text-danger"},[r._v(r._s(r.name_error))])]),r._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"login_email"}},[r._v("Email")]),r._v(" "),e("input",{ref:"email",staticClass:"form-control",attrs:{type:"text",id:"login_email",placeholder:"Email",required:""}}),r._v(" "),e("small",{ref:"email_error",staticClass:"text-danger"},[r._v(r._s(r.email_error))])]),r._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"login_password"}},[r._v("Password")]),r._v(" "),e("input",{ref:"password",staticClass:"form-control",attrs:{type:"password",id:"login_password",placeholder:"Contraseña",required:""}}),r._v(" "),e("small",{ref:"password_error",staticClass:"text-danger"},[r._v(r._s(r.password_error))])]),r._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"login_password_confirmation"}},[r._v("Confirme password")]),r._v(" "),e("input",{ref:"password_confirmation",staticClass:"form-control",attrs:{type:"password",id:"login_password_confirmation",placeholder:"Confirme contraseña",required:""}}),r._v(" "),e("small",{ref:"password_confirmation_error",staticClass:"text-danger"},[r._v(r._s(r.password_confirmation_error))])]),r._v(" "),e("br"),r._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:r.register}},[r._v("Registrarse")])])])])}),[],!1,null,null,null).exports}}]);