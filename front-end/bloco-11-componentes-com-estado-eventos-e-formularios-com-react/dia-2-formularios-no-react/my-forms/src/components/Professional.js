import React from 'react';

class Professional extends React.Component {
  render() {
    const { resume, job, jobDescription, changeHandler } = this.props;
    return (
      <form>
        <fieldset>
          <div>
            <label>Resume: </label>
            <textarea
              name='resume'
              value={resume}
              onChange={changeHandler}
              required
              maxLength='1000'
            ></textarea>
          </div>
          <div>
            <label>Job: </label>
            <textarea
              name='job'
              value={job}
              onChange={changeHandler}
              required
              maxLength='40'
            ></textarea>
          </div>
          <div>
            <label>Description: </label>
            <textarea
              name='jobDescription'
              value={jobDescription}
              onChange={changeHandler}
              required
              maxLength='40'
            ></textarea>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Professional;
