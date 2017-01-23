import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'

import PostForm from 'PostForm'

describe('PostForm', () => {
  it('should exist', () => {
    expect(PostForm).toExist();
  });

  describe('_handleSubmit', () => {
    it('should run the _handleSubmit function', () => {
      var spy = expect.createSpy();
      var form = TestUtils.renderIntoDocument(<PostForm handleFormPost={spy}/>);
      var $el = $(ReactDOM.findDOMNode(form));

      form.refs.post_text.value = 'testing!';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith('testing!');
    });

    it('should not run the _handleSubmit function if post_text length < 5', () => {
      var spy = expect.createSpy();
      var form = TestUtils.renderIntoDocument(<PostForm handleFormPost={spy}/>);
      var $el = $(ReactDOM.findDOMNode(form));

      form.refs.post_text.value = 'test';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });

    it('should not run the _handleSubmit function if post_text length > 500', () => {
      var spy = expect.createSpy();
      var form = TestUtils.renderIntoDocument(<PostForm handleFormPost={spy}/>);
      var $el = $(ReactDOM.findDOMNode(form));

      form.refs.post_text.value = 'Lorem Khaled Ipsum is a major key to success. Bless up. The key to success is to keep your head above the water, never give up. How’s business? Boomin. We don’t see them, we will never see them. Special cloth alert. It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. Eliptical talk. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat. It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean.';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
  });
});
