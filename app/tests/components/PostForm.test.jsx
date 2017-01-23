import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'
import Server from 'Server'

var request = require('supertest')(Server);

import PostForm from 'PostForm'

describe('PostForm', () => {
  it('should exist', () => {
    expect(PostForm).toExist();
  });

  describe('_handleSubmit', () => {
    it('should run the _handleSubmit function', () => {
      // Create spy later.
    })

  })
});
