import React from 'react';

import i18n from 'lib-app/i18n';
import Button from 'core-components/button';

class AreYouSure extends React.Component {
    static propTypes = {
        description: React.PropTypes.string,
        onYes: React.PropTypes.func
    };

    static contextTypes = {
        closeModal: React.PropTypes.func
    };

    componentDidMount() {
        this.refs.yesButton && this.refs.yesButton.focus();
    }

    render() {
        return (
            <div className="are-you-sure" role="dialog" aria-labelledby="are-you-sure__header" aria-describedby="are-you-sure__description">
                <div className="are-you-sure__header" id="are-you-sure__header">
                    {i18n('ARE_YOU_SURE')}
                </div>
                <div className="are-you-sure__description" id="are-you-sure__description">
                    {this.props.description}
                </div>
                <div className="are-you-sure__buttons">
                    <div className="are-you-sure__yes-button">
                        <Button type="secondary" size="small" onClick={this.onYes.bind(this)} ref="yesButton" tabIndex="2">
                            {i18n('YES')}
                        </Button>
                    </div>
                    <div className="are-you-sure__no-button">
                        <Button type="link" size="auto" onClick={this.onNo.bind(this)}  tabIndex="2">
                            {i18n('CANCEL')}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    onYes() {
        this.closeModal();

        if (this.props.onYes) {
            this.props.onYes();
        }
    }

    onNo() {
        this.closeModal();
    }

    closeModal() {
        if (this.context.closeModal) {
            this.context.closeModal();
        }
    }
}

export default AreYouSure;