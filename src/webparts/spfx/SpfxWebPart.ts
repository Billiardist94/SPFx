import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle,
  PropertyPaneButton,
  PropertyPaneButtonType
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxWebPartStrings';
import Spfx from './components/Spfx';
import { ISpfxProps } from './components/ISpfxProps';

export interface ISpfxWebPartProps {
  description: string;
  test: string;
  test1: boolean;
  test2: string;
  test3: boolean;
  button: string;
  context: string;
}

export default class SpfxWebPart extends BaseClientSideWebPart<ISpfxWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxProps > = React.createElement(
      Spfx,
      {
        description: this.properties.description,
        test: this.properties.test,
        test1: this.properties.test1,
        test2: this.properties.test2,
        test3: this.properties.test3,
        button: this.properties.button,
        context: this.context.pageContext.web.title,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getdataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getAlert = () => {
    alert('This is a new button')
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
                }),
                PropertyPaneTextField('test', {
                  label: 'Multi-line Text Field',
                  multiline: true
                }),
                PropertyPaneCheckbox('test1', {
                  text: 'Checkbox'
                }),
                PropertyPaneDropdown('test2', {
                  label: 'Dropdown',
                  options: [
                    { key: '1', text: 'One' },
                    { key: '2', text: 'Two' },
                    { key: '3', text: 'Three' },
                    { key: '4', text: 'Four' },
                  ]
                }),
                PropertyPaneToggle('test3', {
                  label: 'Toggle', 
                  onText: 'On',
                  offText: 'Off'
                }),
                PropertyPaneButton('button', {
                  text: 'New button',
                  buttonType: PropertyPaneButtonType.Primary,
                  onClick: (this.getAlert)
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
