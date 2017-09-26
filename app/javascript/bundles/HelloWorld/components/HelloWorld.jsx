import PropTypes from 'prop-types';
import React from 'react';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
    courses: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    //onClick={this.onClickSave} />
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name ,
                  course: {title: '' }
                  };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }

  updateName = (name) => {
    this.setState({ name });
  };

  onTitleChange(event) {
  const course = this.state.course;
  course.title = event.target.value;
  this.setState({course: course});
  }

onClickSave(){
alert('saving ${this.state.course.title}');
this.props.dispatch(courseActions.createCourse(this.state.course));
}
courseRow(course,index){
  return <div key={index}>{course.title}</div>
}

  render() {
    return (
      <div>
      <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>
        <hr />
        <div>
          <h3>Courses </h3>
          {this.props.courses.map(this.courseRow)}
          <h2>Add courses</h2>
          <input type="text" onChange={this.onTitleChange}
          value = {this.state.course.title} />
          <input type="submit" value="save"
          onClick={this.onClickSave}/>
          </div>

      </div>

    );
  }
}
