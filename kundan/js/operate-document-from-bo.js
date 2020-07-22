"use strict";

var operateDocumentFromBO = {
  props: {
    documents: {
      filteredA:
        "I am currently unavailable, please leave your details in the contact form or via chat and I will get back to you."
    },
	filteredB: "I am available to chat now.",
    htmlTemplate: {
      filteredA: "",
      filteredB: ""
    }
  },
  init: function() {
    this.cacheDom();

    if (this.weHaveSomeDocuments()) {
      let data = handelbarsDataPrivatObject.documentsFromBO;
	  
	  this.props.documents.filteredA = data;
      console.log(
        "this.props.documents.filteredA",
        this.props.documents.filteredA
      );
	  
	  this.props.documents.filteredB = data;
	  
      this.createDocumentsMarkup();
    }
  },
  cacheDom: function() {
    this.$resourcesContentForA = $("#resources-documents-filter");
    this.$resourcesContentForB = $("#financial-services-guide");
  },

  weHaveSomeDocuments: function() {
    return handelbarsDataPrivatObject.documentsFromBO;
  },
  createDocumentsMarkup: function() {
   this.props.htmlTemplate.filteredA =  this.props.documents.filteredA.map(function(item) {	  
	  if(item.name.indexOf("_") == -1){
		return  "<div class='documents-status forms-and-documents-box'> <h5 class='link-icon link-icon-file document-name'>" + item.name + "</h5> <p> PDF |" + item.path.length + "KB <a class='link-icon link-icon-file download-link' href=" + item.path +  " target='_blank' > <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'> <g fill='none' fill-rule='evenodd'> <polygon fill='#0C7CB0' fill-rule='nonzero' points='32.275 20.423 30.186 18.334 21.905 26.601 21.905 8.571 18.942 8.571 18.942 26.601 10.675 18.32 8.571 20.423 20.423 32.275'/> <rect width='38' height='38' x='1' y='1' stroke='#0C7CB0' stroke-width='2'/> </g></svg> </a></p></div>"
	  }
	  });
	this.props.htmlTemplate.filteredB =  this.props.documents.filteredB.map(function(item){
      if(item.name.charAt(0) === 'a' && item.name.charAt(1) === '_'){
	   return "<a class='link-icon link-icon-file download-link' href=" + item.path +  " target='_blank' > Financial Services Guide </a>"
	  }
    });
	
    this.appendRemoveData({
		  arr: this.props.htmlTemplate.filteredA, 
		  $elem: this.$resourcesContentForA,
		  $elemToRemove: this.$resourcesContentForA.parent().parent()
		});
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredB, $elem: this.$resourcesContentForB, $elemToRemove: this.$resourcesContentForB.parent().parent() });
	
	},	
	
	appendRemoveData: function( arr, $elem, $elemToRemove ) {
		if (arr.arr.length > 0 && arr.$elem.length > 0) {
		  arr.$elem.append(arr.arr.join(""));
		} else if (arr.arr.length <= 0 && arr.$elem.length > 0) {
		  arr.$elemToRemove.remove();
		}
		return;
	  }
  
};

//module.exports = operateDocumentFromBO;

operateDocumentFromBO.init();
