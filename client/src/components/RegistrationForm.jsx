import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Send from 'material-ui-icons/Send';
// import TestBtn from './TestComponent.jsx'

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 400,
	},
	menu: {
		width: 200,
	},
	button: {
		margin: theme.spacing.unit,
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
	},
});


class RegistrationForm extends React.Component {
	state = {
		email: '',
		password: '',
		confirmPassword: '',
		errors: {},
		isLoading: true

	};

	handleChange = userData => event => {
		this.setState({
			[userData]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		return console.error(this.state);
	};

	render() {
		const { classes } = this.props;
		const { email, password, confirmPassword, error, isLoading } = this.state;

		return (
			<form className={classes.container} 
				onSubmit={this.handleSubmit} 
				noValidate 
				autoComplete="off"
			>
			{this.props.appState.map(el => <h2 key={el}>{el}</h2> )}
				<TextField
					id="email"
					label="Email"
					className={classes.textField}
					type="email"
					value={email}
					onChange={this.handleChange('email')}
					margin="normal"
				/>
				<TextField
					id="password"
					label="Password"
					className={classes.textField}
					type="password"
					onChange={this.handleChange('password')}
					margin="normal"
				/>
				<TextField
					id="confirmPassword"
					label="Confirm password"
					className={classes.textField}
					type="password"
					onChange={this.handleChange('confirmPassword')}
					margin="normal"
				/>
				<Button type="submit" 
					className={classes.button} 
					variant="raised" 
					color="primary"
					disabled={isLoading}
				>
				Submit
					<Send className={classes.rightIcon} />
				</Button>
			</form>
		);
	}
}

RegistrationForm.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToProps  = (state) => {
	return {
		appState: state
	}
}

export default compose(withStyles(styles), 
connect(mapStateToProps, null))(RegistrationForm);