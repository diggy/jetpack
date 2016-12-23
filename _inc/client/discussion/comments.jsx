/**
 * External dependencies
 */
import analytics from 'lib/analytics';
import React from 'react';
import { translate as __ } from 'i18n-calypso';
import TextInput from 'components/text-input';

/**
 * Internal dependencies
 */
import {
	FormFieldset,
	FormLegend,
	FormLabel
} from 'components/forms';
import { ModuleToggle } from 'components/module-toggle';
import { ModuleSettingsForm as moduleSettingsForm } from 'components/module-settings/module-settings-form';
import { ModuleSettingSelect } from 'components/module-settings/form-components';
import SettingsCard from 'components/settings-card';

export const Comments = moduleSettingsForm(
	React.createClass( {

		toggleModule( name, value ) {
			this.props.updateFormStateOptionValue( name, !value );
		},

		render() {
			return (
				<SettingsCard header={ __( 'Comments', { context: 'Settings header' } ) } { ...this.props } >
					<ModuleToggle slug={ 'comments' }
								  compact
								  activated={ this.props.getOptionValue( 'comments' ) }
								  toggling={ this.props.isSavingAnyOption() }
								  toggleModule={ this.toggleModule }>
						<span className="jp-form-toggle-explanation">
							{
								__( 'Use Jetpack comments. Let readers use their WordPress.com,	Twitter, Facebook or Google+ to leave comments on your posts and pages.' )
							}
						</span>
					</ModuleToggle>
					<FormFieldset>
						<FormLegend>{ __( 'Comments headline' ) }</FormLegend>
						<FormLabel>
							<TextInput
								name={ 'highlander_comment_form_prompt' }
								value={ this.props.getOptionValue( 'highlander_comment_form_prompt' ) }
								disabled={ this.props.isUpdating( 'highlander_comment_form_prompt' ) }
								onChange={ this.props.onOptionChange} />
						</FormLabel>
						<span className="jp-form-setting-explanation">{ __( 'A few catchy words to motivate your readers to comment.' ) }</span>
					</FormFieldset>
					<FormFieldset>
						<FormLegend>{ __( 'Color Scheme' ) }</FormLegend>
						<ModuleSettingSelect
							name={ 'jetpack_comment_form_color_scheme' }
							value={ this.props.getOptionValue( 'jetpack_comment_form_color_scheme' ) }
							onChange={ this.props.onOptionChange }
							{ ...this.props }
							validValues={ this.props.validValues( 'jetpack_comment_form_color_scheme', 'comments' ) }/>
					</FormFieldset>
					<hr />
					<FormFieldset>
						<ModuleToggle slug={ 'gravatar-hovercards' }
									  compact
									  activated={ this.props.getOptionValue( 'gravatar-hovercards' ) }
									  toggling={ this.props.isSavingAnyOption() }
									  toggleModule={ this.toggleModule }>
							<span className="jp-form-toggle-explanation">
								{
									this.props.getModule( 'gravatar-hovercards' ).description
								}
							</span>
						</ModuleToggle>
						<br />
						<ModuleToggle slug={ 'markdown' }
									  compact
									  activated={ !!this.props.getOptionValue( 'wpcom_publish_comments_with_markdown' ) }
									  toggling={ this.props.isSavingAnyOption() }
									  toggleModule={ m => this.props.updateFormStateModuleOption( m, 'wpcom_publish_comments_with_markdown' ) }>
							<span className="jp-form-toggle-explanation">
								{
									__( 'Use Markdown for comments.' )
								}
							</span>
						</ModuleToggle>
					</FormFieldset>
				</SettingsCard>
			);
		}
	} )
);
