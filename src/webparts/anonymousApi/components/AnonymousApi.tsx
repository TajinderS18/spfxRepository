import * as React from 'react';
import styles from './AnonymousApi.module.scss';
import { IAnonymousApiProps } from './IAnonymousApiProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class AnonymousApi extends React.Component<IAnonymousApiProps, {}> {
  public render(): React.ReactElement<IAnonymousApiProps> {
    return (
      <div className={ styles.anonymousApi }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>HttpClient Anonymous Nasa API Demo</span>
            </div>
          </div>
          <div className={styles.row}>
            <img src={this.props.apolloMissionImage.links[0].href} />
            <div><strong>Title:</strong> { this.props.apolloMissionImage.data[0].title}</div>
            <div><strong>Keywords: </strong></div>
            {
                this.props.apolloMissionImage.data[0].keywords.forEach(element => {
                  <div id={element}>{element}</div>
                })
              }
            <ul>
              {
                this.props.apolloMissionImage.data[0].keywords.forEach(element => {
                  <li>element</li>
                })
              }
            </ul>
           
          </div>
        </div>
      </div>
    );
  }
}
