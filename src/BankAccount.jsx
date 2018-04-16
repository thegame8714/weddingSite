import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './translation/sentences'

const BankAccount = () => (
  <div className="bank-account">
    <p>
      <FormattedMessage {...messages.bankAccount_description} />
    </p>
    <div>
      <FormattedMessage {...messages.sort_code} /> 204486
    </div>
    <div>
      <FormattedMessage {...messages.account_number} /> 13966917
    </div>
    <div>
      <FormattedMessage {...messages.outside_uk} /> GB03 BUKB 20448613966917
    </div>
  </div>
)

export default BankAccount
