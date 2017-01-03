import React from 'react';

const Fbia = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-body">
        <h1 className="title">Facebook Instant Articles</h1>
        <h2 className="subtitle">
          A new way for any publisher to create fast, interactive articles on Facebook.
        </h2>
        <br />
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <article className="message is-info">
              <div className="message-header">
                Coming Soon
              </div>
              <div className="message-body">
                We are working to integrate more channels so you can distribute your content easily on mobile.
                <br /><br />
                If you want to learn more
                about Facebook Instant Articles you can take a look to their <a target="_blank" rel="noopener noreferrer" href="https://instantarticles.fb.com">official site</a>,&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://instantarticles.fb.com/faqs/">the FAQs</a> or their <a href="https://instantarticles.fb.com/getting-started/" rel="noopener noreferrer" target="_blank">Getting started</a> guide.
                <br /><br /><br />
                <p className="control">
                  <label className="checkbox" htmlFor="notifyMeFbia">
                    <input id="notifyMeFbia" type="checkbox" />
                    &nbsp;<strong>Please notify me when you launch.</strong>
                  </label>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Fbia;
