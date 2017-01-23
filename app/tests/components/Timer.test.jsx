import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'

import Timer from 'Timer'

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should increase the time when running', done => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('started');

    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });
});
