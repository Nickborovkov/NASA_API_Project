(this.webpackJsonpNASA_API_app=this.webpackJsonpNASA_API_app||[]).push([[7],{247:function(e,a,t){e.exports={earthImage:"earthImage_earthImage__2B6Gm",title:"earthImage_title__s1gF6",imageHolder:"earthImage_imageHolder__2wgAg",image:"earthImage_image__1WqjJ",imageDate:"earthImage_imageDate__1MAqV",params:"earthImage_params__1psJY",imagesArray:"earthImage_imagesArray__1t5vk",imagesItem:"earthImage_imagesItem__1PkDx"}},253:function(e,a,t){"use strict";t.r(a);var c=t(1),r=t(247),s=t.n(r),i=t(22),n=t(46),l=t(40),d=t(95),m=t(41),h=t(2),j=function(){var e=Object(i.b)(),a=d.b().shape({selectedDate:d.c().required("Field is required")});return Object(h.jsx)("div",{children:Object(h.jsx)(m.b,{initialValues:{selectedDate:""},validateOnBlur:!0,onSubmit:function(a,t){var c=t.resetForm;e(Object(n.c)(a.selectedDate)),c({values:""})},validationSchema:a,children:function(e){var a=e.values,t=e.touched,c=e.errors,r=e.handleSubmit,s=e.handleBlur,i=e.handleChange,n=e.isValid,l=e.dirty;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Select date to show"}),Object(h.jsxs)("div",{children:[t.selectedDate&&c.selectedDate&&Object(h.jsx)("div",{children:c.selectedDate}),Object(h.jsx)("input",{type:"date",name:"selectedDate",value:a.selectedDate,onBlur:s,onChange:i})]}),Object(h.jsx)("button",{disabled:!n&&!l,onClick:r,type:"submit",children:"Show"})]})}})})},o=function(e,a){var t=e.split("-"),c={year:t[0],month:t[1],date:t[2]};return"https://api.nasa.gov/EPIC/archive/natural/".concat(c.year,"/").concat(c.month,"/").concat(c.date,"/png/").concat(a,".png?api_key=").concat("ZWGiTATMzPHjpsUJSj289aerwaSsLpikIiYBhaek")},b=t(5);a.default=function(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.earthImage.earthImage})),t=Object(i.c)((function(e){return e.earthImage.date})),r=Object(i.c)((function(e){return e.library.searchStart}));return Object(c.useEffect)((function(){e(Object(n.b)(t))}),[e,t]),a?r?Object(h.jsx)(b.a,{to:"/nasaLibrary"}):Object(h.jsxs)("div",{className:s.a.earthImage,children:[Object(h.jsx)("h2",{className:s.a.title,children:"See Earth Photos from space"}),Object(h.jsx)(j,{}),Object(h.jsx)("div",{className:s.a.imagesArray,children:a.map((function(e){return Object(h.jsxs)("div",{className:s.a.imagesItem,children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{className:s.a.imageDate,children:["Date: ",e.date]}),Object(h.jsxs)("p",{className:s.a.params,children:["Latitude: ",e.centroid_coordinates.lat]}),Object(h.jsxs)("p",{className:s.a.params,children:["Longitude: ",e.centroid_coordinates.lon]})]}),Object(h.jsx)("div",{className:s.a.imageHolder,children:Object(h.jsx)("img",{className:s.a.image,src:o(t,e.image),alt:"Not available, please change date"})})]},e.identifier)}))})]}):Object(h.jsx)(l.a,{})}}}]);
//# sourceMappingURL=7.f4628b63.chunk.js.map