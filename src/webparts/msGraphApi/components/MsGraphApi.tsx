import * as React from 'react';
import styles from './MsGraphApi.module.scss';
import { IMsGraphApiProps } from './IMsGraphApiProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { AadHttpClient, MSGraphClient } from '@microsoft/sp-http';

export default class MsGraphApi extends React.Component<IMsGraphApiProps, {}> {
  public render(): React.ReactElement<IMsGraphApiProps> {
    return (
      <div className={ styles.msGraphApi }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
