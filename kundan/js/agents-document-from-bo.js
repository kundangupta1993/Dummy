const operateDocumentFromBO = {
  props: {
    documents: {
		filteredA:"I am currently unavailable, please leave your details in the contact form or via chat and I will get back to you.",
		filteredB: "I am available to chat now.",
		filteredC: "I am available",
		filteredD: "I am available",
		filteredE: "I am available",
		filteredF: "I am available",
		filteredG: "I am available",
		filteredH: "I am available",
		filteredI: "I am available",
		filteredJ: "I am available",
		filteredK: "I am available",
		filteredL: "I am available",
		filteredM: "I am available",
		filteredN: "I am available",
		filteredO: "I am available",
		filteredP: "I am available",
		filteredQ: "I am available",
		filteredR: "I am available",
		filteredS: "I am available",
		filteredT: "I am available",
		filteredU: "I am available",
		
		filteredZ: "Check Document.",
    },
    htmlTemplate: {
        filteredA: '',
        filteredB: '',
        filteredC: '',
		filteredD: '',
		filteredE: '',
		filteredF: '',
		filteredG: '',
		filteredH: '',
		filteredI: '',
		filteredJ: '',
		filteredK: '',
		filteredL: '',
		filteredM: '',
		filteredN: '',
		filteredO: '',
		filteredP: '',
		filteredQ: '',
		filteredR: '',
		filteredS: '',
		filteredT: '',
		filteredU: '',
		
        filteredZ: '',
    }
  },
  init() {
    this.cacheDom();

    if(this.weHaveSomeDocuments()) {
      let data = handelbarsDataPrivatObject.documentsFromBO;

            this.props.documents.filteredA = data.filter(item => item.name.charAt(0) === 'a' && item.name.charAt(1) === '_');
            this.props.documents.filteredB = data.filter(item => item.name.charAt(0) === 'b' && item.name.charAt(1) === '_');
            this.props.documents.filteredC = data.filter(item => item.name.charAt(0) === 'c' && item.name.charAt(1) === '_');
			this.props.documents.filteredD = data.filter(item => item.name.charAt(0) === 'd' && item.name.charAt(1) === '_');
			this.props.documents.filteredE = data.filter(item => item.name.charAt(0) === 'e' && item.name.charAt(1) === '_');
			this.props.documents.filteredF = data.filter(item => item.name.charAt(0) === 'f' && item.name.charAt(1) === '_');
			this.props.documents.filteredG = data.filter(item => item.name.charAt(0) === 'g' && item.name.charAt(1) === '_');
			this.props.documents.filteredH = data.filter(item => item.name.charAt(0) === 'h' && item.name.charAt(1) === '_');
			this.props.documents.filteredI = data.filter(item => item.name.charAt(0) === 'i' && item.name.charAt(1) === '_');
			this.props.documents.filteredJ = data.filter(item => item.name.charAt(0) === 'j' && item.name.charAt(1) === '_');
			this.props.documents.filteredK = data.filter(item => item.name.charAt(0) === 'k' && item.name.charAt(1) === '_');
			this.props.documents.filteredL = data.filter(item => item.name.charAt(0) === 'l' && item.name.charAt(1) === '_');
			this.props.documents.filteredM = data.filter(item => item.name.charAt(0) === 'm' && item.name.charAt(1) === '_');
			this.props.documents.filteredN = data.filter(item => item.name.charAt(0) === 'n' && item.name.charAt(1) === '_');
			this.props.documents.filteredO = data.filter(item => item.name.charAt(0) === 'o' && item.name.charAt(1) === '_');
			this.props.documents.filteredP = data.filter(item => item.name.charAt(0) === 'p' && item.name.charAt(1) === '_');
			this.props.documents.filteredQ = data.filter(item => item.name.charAt(0) === 'q' && item.name.charAt(1) === '_');
			this.props.documents.filteredR = data.filter(item => item.name.charAt(0) === 'r' && item.name.charAt(1) === '_');
			this.props.documents.filteredS = data.filter(item => item.name.charAt(0) === 's' && item.name.charAt(1) === '_');
			this.props.documents.filteredT = data.filter(item => item.name.charAt(0) === 't' && item.name.charAt(1) === '_');
			this.props.documents.filteredU = data.filter(item => item.name.charAt(0) === 'u' && item.name.charAt(1) === '_');

            this.props.documents.filteredZ = data.filter(item => item.name.indexOf('financial-services-guide') !== -1);

            //console.log('this.props.documents.filteredA', this.props.documents.filteredA);
            // console.log('this.props.documents.filteredB', this.props.documents.filteredB);
            // console.log('this.props.documents.filteredC', this.props.documents.filteredC);

            this.createDocumentsMarkup();

    }
  },
  cacheDom() {
        this.$resourcesContentForA = $("#resources-documents-filter-0");
        this.$resourcesContentForB = $("#resources-documents-filter-1");
        this.$resourcesContentForC = $("#resources-documents-filter-2");
		this.$resourcesContentForD = $("#resources-documents-filter-3");
		this.$resourcesContentForE = $("#resources-documents-filter-4");
		this.$resourcesContentForF = $("#resources-documents-filter-5");
		this.$resourcesContentForG = $("#resources-documents-filter-6");
		this.$resourcesContentForH = $("#resources-documents-filter-7");
		this.$resourcesContentForI = $("#resources-documents-filter-8");
		this.$resourcesContentForJ = $("#resources-documents-filter-9");
		this.$resourcesContentForK = $("#resources-documents-filter-10");
		this.$resourcesContentForL = $("#resources-documents-filter-11");
		this.$resourcesContentForM = $("#resources-documents-filter-12");
		this.$resourcesContentForN = $("#resources-documents-filter-13");
		this.$resourcesContentForO = $("#resources-documents-filter-14");
		this.$resourcesContentForP = $("#resources-documents-filter-15");
		this.$resourcesContentForQ = $("#resources-documents-filter-16");
		this.$resourcesContentForR = $("#resources-documents-filter-17");
		this.$resourcesContentForS = $("#resources-documents-filter-18");
		this.$resourcesContentForT = $("#resources-documents-filter-19");
		this.$resourcesContentForU = $("#resources-documents-filter-20");
    },

  weHaveSomeDocuments() {
    return handelbarsDataPrivatObject.documentsFromBO;
  },
  createDocumentsMarkup() {
   this.props.htmlTemplate.filteredA =  this.props.documents.filteredA.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredB =  this.props.documents.filteredB.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredC =  this.props.documents.filteredC.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredD =  this.props.documents.filteredD.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredE =  this.props.documents.filteredE.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredF =  this.props.documents.filteredF.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredG =  this.props.documents.filteredG.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredH =  this.props.documents.filteredH.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredI =  this.props.documents.filteredI.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredJ =  this.props.documents.filteredJ.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredK =  this.props.documents.filteredK.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredL =  this.props.documents.filteredL.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredM =  this.props.documents.filteredM.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredN =  this.props.documents.filteredN.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredO =  this.props.documents.filteredO.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredP =  this.props.documents.filteredP.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredQ =  this.props.documents.filteredQ.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredR =  this.props.documents.filteredR.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredS =  this.props.documents.filteredS.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredT =  this.props.documents.filteredT.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	this.props.htmlTemplate.filteredU =  this.props.documents.filteredU.map(
      item =>
	   `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );	
	
	this.props.htmlTemplate.filteredZ =  this.props.documents.filteredZ.map(
      item =>
	 `<a class="download-document-pdf" href="${item.path}" target="_blank" > document.pdf </a>`
    );
	
    this.appendRemoveData({ arr: this.props.htmlTemplate.filteredA, $elem: this.$resourcesContentForA, $elemToRemove: this.$resourcesContentForA.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredB, $elem: this.$resourcesContentForB, $elemToRemove: this.$resourcesContentForB.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredC, $elem: this.$resourcesContentForC, $elemToRemove: this.$resourcesContentForC.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredD, $elem: this.$resourcesContentForD, $elemToRemove: this.$resourcesContentForD.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredE, $elem: this.$resourcesContentForE, $elemToRemove: this.$resourcesContentForE.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredF, $elem: this.$resourcesContentForF, $elemToRemove: this.$resourcesContentForF.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredG, $elem: this.$resourcesContentForG, $elemToRemove: this.$resourcesContentForG.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredH, $elem: this.$resourcesContentForH, $elemToRemove: this.$resourcesContentForH.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredI, $elem: this.$resourcesContentForI, $elemToRemove: this.$resourcesContentForI.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredJ, $elem: this.$resourcesContentForJ, $elemToRemove: this.$resourcesContentForJ.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredK, $elem: this.$resourcesContentForK, $elemToRemove: this.$resourcesContentForK.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredL, $elem: this.$resourcesContentForL, $elemToRemove: this.$resourcesContentForL.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredM, $elem: this.$resourcesContentForM, $elemToRemove: this.$resourcesContentForM.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredN, $elem: this.$resourcesContentForN, $elemToRemove: this.$resourcesContentForN.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredO, $elem: this.$resourcesContentForO, $elemToRemove: this.$resourcesContentForO.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredP, $elem: this.$resourcesContentForP, $elemToRemove: this.$resourcesContentForP.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredQ, $elem: this.$resourcesContentForQ, $elemToRemove: this.$resourcesContentForQ.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredR, $elem: this.$resourcesContentForR, $elemToRemove: this.$resourcesContentForR.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredS, $elem: this.$resourcesContentForS, $elemToRemove: this.$resourcesContentForS.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredT, $elem: this.$resourcesContentForT, $elemToRemove: this.$resourcesContentForT.parent().parent() });
	this.appendRemoveData({ arr: this.props.htmlTemplate.filteredU, $elem: this.$resourcesContentForU, $elemToRemove: this.$resourcesContentForU.parent().parent() });	
	
	//this.appendRemoveData({ arr: [this.props.htmlTemplate.filtered0], $elem: this.$resourcesContentForZ, $elemToRemove: this.$resourcesContentForZ });
  },
  appendRemoveData({ arr, $elem, $elemToRemove }) {
    if (arr.length > 0 && $elem.length > 0) {
      $elem.append(arr.join(""));
    } else if (arr.length <= 0 && $elem.length > 0) {
      $elemToRemove.remove();
    }
    return;
  }
};

//module.exports = operateDocumentFromBO;

operateDocumentFromBO.init();
