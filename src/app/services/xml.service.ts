import { Injectable } from '@angular/core';
import * as convert from 'xml-js';

@Injectable()

export class XmlService {
  constructor() {}

  download(data: any, filename:string) {
    let xmlData = this.ConvertToXml(data);
    var a: any = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a)
    var blob = new Blob([xmlData], { type: 'application/xml' } )
    var url = window.URL.createObjectURL(blob);
    a.href=url 

    var isIE = /*@cc_on!@*/false || !!(<any> document).documentMode;

    if (isIE)
    {   
      var retVal = navigator.msSaveBlob(blob, filename+'.xml');
    }
    else{
      a.download = filename+'.xml';
    }
    // If you will any error in a.download then dont worry about this. 
    a.click();

  }

  ConvertToXml(objArray: any) {
    let rawValue = objArray.getRawValue()
    let assessmentJson = {"ASSESSMENT":rawValue}
  
    let options = {compact: true, ignoreComment: true, spaces: 2};
    let xmlValues = {"_declaration":{"_attributes":{"version":"1.0","encoding":"UTF-8"}}}
    let xml1 = convert.js2xml(xmlValues, options);
    let xml2 = convert.js2xml(assessmentJson, options);
    let completeXml = xml1 + '\n' + xml2 
    return completeXml
  }

}