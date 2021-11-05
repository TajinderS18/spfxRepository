import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AnonymousApiWebPartStrings';
import AnonymousApi from './components/AnonymousApi';
import { IAnonymousApiProps } from './components/IAnonymousApiProps';
import {HttpClient, HttpClientResponse} from '@microsoft/sp-http';

export interface IAnonymousApiWebPartProps {
  description: string;
}

export default class AnonymousApiWebPart extends BaseClientSideWebPart<IAnonymousApiWebPartProps> {

  public render(): void {

    if(!this.renderedOnce){
      this._getApolloImage()
      .then(response => {

        let obj: any = response.collection.items[0].data[0];

        if(obj)
        {
          obj.keywords.map((itm) => {
            //console.log(itm);
          })
        
        }

        const element: React.ReactElement<IAnonymousApiProps> = React.createElement(
          AnonymousApi,
          {
            apolloMissionImage: response.collection.items[0],
            description: this.properties.description,
            dataObject: obj
          }
        );
    
        ReactDom.render(element, this.domElement);
      });
    }

    
  }

  private _getApolloImage(): Promise<any>{

    return this.context.httpClient.get('https://images-api.nasa.gov/search?q=apollo%2011&media_type=image',HttpClient.configurations.v1)
    .then((response: HttpClientResponse) => {
      return response.json(); 
    }).then(jsonresponse => {
        return jsonresponse;
    }) as Promise<any>;

  }
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
