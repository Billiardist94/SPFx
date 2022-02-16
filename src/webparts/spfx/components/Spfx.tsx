import * as React from 'react';
import styles from './Spfx.module.scss';
import { ISpfxProps } from './ISpfxProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Spfx extends React.Component < ISpfxProps, {} > {
  public render(): React.ReactElement<ISpfxProps> {
    return(
      <div className = { styles.spfx } >
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <p className={styles.description}>{escape(this.props.test)}</p>
              <p className={styles.description}>{this.props.test1}</p>
              <p className={styles.description}>{escape(this.props.test2)}</p>
              <p className={styles.description}>{this.props.test3}</p>
              <p className={styles.description}>Loading from {escape(this.props.context)}</p>
              <p className={styles.description}>{this.props.button}</p>
              <a href='https://aka.ms/spfx' className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
