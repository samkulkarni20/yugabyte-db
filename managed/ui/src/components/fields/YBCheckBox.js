// Copyright (c) YugaByte, Inc.

import React, { Component } from 'react';
import YBLabel from './YBLabel';

export default class YBCheckBox extends Component {

  render() {
    const { input, label, meta, checkState,
      onClick } = this.props;
    return (
       <YBLabel label={label} meta={meta} >
            <input {...input} type="checkbox"
                   name={this.props.name} defaultChecked={checkState}
                   id={this.props.id} onClick={onClick}
            />
       </YBLabel>
      )
    }
}