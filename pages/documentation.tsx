const documentation = () => {
  return (
    <div style={{ maxWidth: "1500px", margin: "auto" }}>
      <h1 id="manager">Manager</h1>
      <h2 id="methods">Methods</h2>
      <h3 id="default_admin_role">DEFAULT_ADMIN_ROLE</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>{" "}
            <span className="hljs-title">DEFAULT_ADMIN_ROLE</span>
            <span className="hljs-params">()</span>{" "}
            <span className="hljs-title">external</span>{" "}
            <span className="hljs-title">view</span>{" "}
            <span className="hljs-title">returns</span>{" "}
            <span className="hljs-params">(bytes32)</span>
          </span>
        </code>
      </pre>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="domain_separator">DOMAIN_SEPARATOR</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>{" "}
            <span className="hljs-title">DOMAIN_SEPARATOR</span>
            <span className="hljs-params">()</span>{" "}
            <span className="hljs-title">external</span>{" "}
            <span className="hljs-title">view</span>{" "}
            <span className="hljs-title">returns</span>{" "}
            <span className="hljs-params">(bytes32)</span>
          </span>
        </code>
      </pre>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="activateagreement">activateAgreement</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          activateAgreement(uint256 agreementID){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <p>Activates an agreement</p>
      <p>
        <em>
          The agreement needs to be created, inactive and the funds for the
          first cycle set
        </em>
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>The ID of the agreement to activate</td>
          </tr>
        </tbody>
      </table>
      <h3 id="agreementnonce">agreementNonce</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>{" "}
            <span className="hljs-title">agreementNonce</span>
            <span className="hljs-params">()</span>{" "}
            <span className="hljs-title">external</span>{" "}
            <span className="hljs-title">view</span>{" "}
            <span className="hljs-title">returns</span>{" "}
            <span className="hljs-params">(uint256)</span>
          </span>
        </code>
      </pre>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="agreements">agreements</h3>
      <pre>
        <code className="lang-solidity">
          function agreements(uint256) external view returns (struct
          Types.AgreementParameters parameters, struct Types.AgreementState{" "}
          <span className="hljs-keyword">state</span>)
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>parameters</td>
            <td>Types.AgreementParameters</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>state</td>
            <td>Types.AgreementState</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="cancelagreement">cancelAgreement</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          cancelAgreement(uint256 agreementID){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <p>
        Closes an agreement and releases the escrowed funds accordingly to the
        agreement state
      </p>
      <p>
        <em>only callable by the contractee</em>
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>The ID of the agreement</td>
          </tr>
        </tbody>
      </table>
      <h3 id="challengeagreement">challengeAgreement</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          challengeAgreement(uint256 agreementID){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <p>
        Sets the agreement state to challenged and emmits an event that will be
        captured by the Contractful DAO( currently a multisig)
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>The ID of the agreement</td>
          </tr>
        </tbody>
      </table>
      <h3 id="challengeduration">challengeDuration</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>{" "}
            <span className="hljs-title">challengeDuration</span>
            <span className="hljs-params">()</span>{" "}
            <span className="hljs-title">external</span>{" "}
            <span className="hljs-title">view</span>{" "}
            <span className="hljs-title">returns</span>{" "}
            <span className="hljs-params">(uint128)</span>
          </span>
        </code>
      </pre>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>uint128</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="checkfundsmigration">checkFundsMigration</h3>
      <pre>
        <code className="lang-solidity">
          function checkFundsMigration(
          <span className="hljs-name">uint256</span> agreementID) external view
          returns (<span className="hljs-name">bool</span>)
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>bool</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="checkupkeep">checkUpkeep</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-keyword">function</span> checkUpkeep(
          <span className="hljs-built_in">bytes</span>){" "}
          <span className="hljs-keyword">external</span> view returns (
          <span className="hljs-built_in">bool</span> upkeepNeeded,{" "}
          <span className="hljs-built_in">bytes</span> performData)
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>bytes</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>upkeepNeeded</td>
            <td>bool</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>performData</td>
            <td>bytes</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="claimprotocolfees">claimProtocolFees</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>{" "}
            <span className="hljs-title">claimProtocolFees</span>
            <span className="hljs-params">
              (uint256 agreementID, uint128 amount, address{" "}
              <span className="hljs-keyword">to</span>)
            </span>{" "}
            <span className="hljs-title">external</span>{" "}
            <span className="hljs-title">nonpayable</span>
          </span>
        </code>
      </pre>
      <p>Withdraws protocol fees to a target address</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>The identifier of the agreement</td>
          </tr>
          <tr>
            <td>amount</td>
            <td>uint128</td>
            <td>The amount of tokens claimed</td>
          </tr>
          <tr>
            <td>to</td>
            <td>address</td>
            <td>The address receiving the fees*</td>
          </tr>
        </tbody>
      </table>
      <h3 id="createagreement">createAgreement</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          createAgreement(IManager.AgreementCreationParams params){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>params</td>
            <td>IManager.AgreementCreationParams</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="depositfundsfornextcycle">depositFundsForNextCycle</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          depositFundsForNextCycle(uint256 agreementID){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="establishmentfeerate">establishmentFeeRate</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>{" "}
            <span className="hljs-title">establishmentFeeRate</span>
            <span className="hljs-params">()</span>{" "}
            <span className="hljs-title">external</span>{" "}
            <span className="hljs-title">view</span>{" "}
            <span className="hljs-title">returns</span>{" "}
            <span className="hljs-params">(uint128)</span>
          </span>
        </code>
      </pre>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>uint128</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="freezeagreements">freezeAgreements</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          freezeAgreements() <span className="hljs-keyword">external</span>{" "}
          nonpayable
        </code>
      </pre>
      <p>Stops all actions on all agreements*</p>
      <h3 id="getagreementparameters">getAgreementParameters</h3>
      <pre>
        <code className="lang-solidity">
          function getAgreementParameters(uint256 agreementID) external view
          returns (uint128 beginningDate, uint128 maturityDate, uint128
          paymentCycleDuration, uint128 paymentCycleAmount, uint128
          establishmentFeeRate_, uint128 penalizationAmount_,{" "}
          <span className="hljs-selector-tag">address</span> underlayingToken,{" "}
          <span className="hljs-selector-tag">address</span> contractor,{" "}
          <span className="hljs-selector-tag">address</span> contractee, string
          descriptionURI)
        </code>
      </pre>
      <p>Returns the parameters of an agreement</p>
      <p>
        <em>
          an agreement can be not active because it has not been activated or
          because it is closed
        </em>
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>The ID of the agreement</td>
          </tr>
        </tbody>
      </table>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>beginningDate</td>
            <td>uint128</td>
            <td>The beginning date of the agreement</td>
          </tr>
          <tr>
            <td>maturityDate</td>
            <td>uint128</td>
            <td>The date when the agreement expires</td>
          </tr>
          <tr>
            <td>paymentCycleDuration</td>
            <td>uint128</td>
            <td>The duration of a payment cycle</td>
          </tr>
          <tr>
            <td>paymentCycleAmount</td>
            <td>uint128</td>
            <td>The amount of tokens to be released per payment cycle</td>
          </tr>
          <tr>
            <td>establishmentFeeRate_</td>
            <td>uint128</td>
            <td>The rate of the establishment fee</td>
          </tr>
          <tr>
            <td>penalizationAmount_</td>
            <td>uint128</td>
            <td>
              The amount of tokens that will be kept in case of a penalization
            </td>
          </tr>
          <tr>
            <td>underlayingToken</td>
            <td>address</td>
            <td>The address of the token used for the agreement</td>
          </tr>
          <tr>
            <td>contractor</td>
            <td>address</td>
            <td>The address of the contractor</td>
          </tr>
          <tr>
            <td>contractee</td>
            <td>address</td>
            <td>The address of the contractee</td>
          </tr>
          <tr>
            <td>descriptionURI</td>
            <td>string</td>
            <td>The URI of the agreement description</td>
          </tr>
        </tbody>
      </table>
      <h3 id="getagreementstate">getAgreementState</h3>
      <pre>
        <code className="lang-solidity">
          function getAgreementState(uint256 agreementID){" "}
          <span className="hljs-keyword">external</span>{" "}
          <span className="hljs-built_in">view</span> returns (uint128
          escrowedFunds, <span className="hljs-keyword">bool</span> closed,{" "}
          <span className="hljs-keyword">bool</span> challenged,{" "}
          <span className="hljs-keyword">bool</span> active)
        </code>
      </pre>
      <p>Returns the state of an agreement</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>The ID of the agreement</td>
          </tr>
        </tbody>
      </table>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>escrowedFunds</td>
            <td>uint128</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>closed</td>
            <td>bool</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>challenged</td>
            <td>bool</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>active</td>
            <td>bool</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="getroleadmin">getRoleAdmin</h3>
      <pre>
        <code className="lang-solidity">
          function getRoleAdmin(<span className="hljs-name">bytes32</span> role)
          external view returns (<span className="hljs-name">bytes32</span>)
        </code>
      </pre>
      <p>
        <em>
          Returns the admin role that controls <code>role</code>. See{" "}
          (grantRole) and (revokeRole). To change a role&#39;s admin, use{" "}
          (_setRoleAdmin).
        </em>
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>role</td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="getuseragreements">getUserAgreements</h3>
      <pre>
        <code className="lang-solidity">
          function getUserAgreements(<span className="hljs-name">address</span>{" "}
          user) external view returns (
          <span className="hljs-name">uint256</span>
          [])
        </code>
      </pre>
      <p>Returns the user agreements</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>user</td>
            <td>address</td>
            <td>The address of the user</td>
          </tr>
        </tbody>
      </table>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>uint256[]</td>
            <td>agreementIDs The IDs of the agreements</td>
          </tr>
        </tbody>
      </table>
      <h3 id="grantrole">grantRole</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          grantRole(bytes32 role, address account){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <p>
        <em>
          Grants <code>role</code> to <code>account</code>. If{" "}
          <code>account</code> had not been already granted <code>role</code>,
          emits a (RoleGranted) event. Requirements: - the caller must have{" "}
          <code>role</code>&#39;s admin role. May emit a (RoleGranted) event.
        </em>
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>role</td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>account</td>
            <td>address</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="hasrole">hasRole</h3>
      <pre>
        <code className="lang-solidity">
          function hasRole(<span className="hljs-name">bytes32</span> role,
          address account) external view returns (
          <span className="hljs-name">bool</span>)
        </code>
      </pre>
      <p>
        <em>
          Returns <code>true</code> if <code>account</code> has been granted{" "}
          <code>role</code>.
        </em>
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>role</td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>account</td>
            <td>address</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>bool</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="initialize">initialize</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          initialize(uint128 challengeDuration_, address governance_){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>challengeDuration_</td>
            <td>uint128</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>governance_</td>
            <td>address</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="initialize_">initialize_</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          initialize_() <span className="hljs-keyword">external</span>{" "}
          nonpayable
        </code>
      </pre>
      <h3 id="migratefunds">migrateFunds</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          migrateFunds(uint256 agreementID){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <p>Releases the funds for the current payment cycle</p>
      <p>
        <em>
          Only the keeper or contractee can call this functionA for loop is used
          to calculate the migration periods instead of storing them on chain to
          reduce gas costsIf there is a remainder, the last migration period
          will be shorter than the others and fall on the maturity date
        </em>
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>The ID of the agreement to release the funds for</td>
          </tr>
        </tbody>
      </table>
      <h3 id="name">name</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>{" "}
            <span className="hljs-title">name</span>
            <span className="hljs-params">()</span>{" "}
            <span className="hljs-title">external</span>{" "}
            <span className="hljs-title">view</span>{" "}
            <span className="hljs-title">returns</span>{" "}
            <span className="hljs-params">
              (<span className="hljs-keyword">string</span>)
            </span>
          </span>
        </code>
      </pre>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>string</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="paused">paused</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>{" "}
            <span className="hljs-title">paused</span>
            <span className="hljs-params">()</span>{" "}
            <span className="hljs-title">external</span>{" "}
            <span className="hljs-title">view</span>{" "}
            <span className="hljs-title">returns</span>{" "}
            <span className="hljs-params">(bool)</span>
          </span>
        </code>
      </pre>
      <p>
        <em>Returns true if the contract is paused, and false otherwise.</em>
      </p>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>bool</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="penalizationamount">penalizationAmount</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>{" "}
            <span className="hljs-title">penalizationAmount</span>
            <span className="hljs-params">()</span>{" "}
            <span className="hljs-title">external</span>{" "}
            <span className="hljs-title">view</span>{" "}
            <span className="hljs-title">returns</span>{" "}
            <span className="hljs-params">(uint128)</span>
          </span>
        </code>
      </pre>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>uint128</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="performupkeep">performUpkeep</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          performUpkeep(bytes performData){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <p>
        method that is actually executed by the keepers, via the registry. The
        data returned by the checkUpkeep simulation will be passed into this
        method to actually be executed.
      </p>
      <p>
        <em>
          The input to this method should not be trusted, and the caller of the
          method should not even be restricted to any single registry. Anyone
          should be able call it, and the input should be validated, there is no
          guarantee that the data passed in is the performData returned from
          checkUpkeep. This could happen due to malicious keepers, racing
          keepers, or simply a state change while the performUpkeep transaction
          is waiting for confirmation. Always validate the data passed in.
        </em>
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>performData</td>
            <td>bytes</td>
            <td>
              is the data which was passed back from the checkData simulation.
              If it is encoded, it can easily be decoded into other types by
              calling <code>abi.decode</code>. This data should not be trusted,
              and should be validated against the contract&#39;s current state.
            </td>
          </tr>
        </tbody>
      </table>
      <h3 id="renouncerole">renounceRole</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          renounceRole(bytes32 role, address account){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <p>
        <em>
          Revokes <code>role</code> from the calling account. Roles are often
          managed via (grantRole) and (revokeRole): this function&#39;s purpose
          is to provide a mechanism for accounts to lose their privileges if
          they are compromised (such as when a trusted device is misplaced). If
          the calling account had been revoked <code>role</code>, emits a{" "}
          (RoleRevoked) event. Requirements: - the caller must be{" "}
          <code>account</code>. May emit a (RoleRevoked) event.
        </em>
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>role</td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>account</td>
            <td>address</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="revokerole">revokeRole</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          revokeRole(bytes32 role, address account){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <p>
        <em>
          Revokes <code>role</code> from <code>account</code>. If{" "}
          <code>account</code> had been granted <code>role</code>, emits a{" "}
          (RoleRevoked) event. Requirements: - the caller must have{" "}
          <code>role</code>&#39;s admin role. May emit a (RoleRevoked) event.
        </em>
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>role</td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>account</td>
            <td>address</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="setchallengeduration">setChallengeDuration</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          setChallengeDuration(uint128 challengeDuration_){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <p>Sets the challenge duration for all agreements</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>challengeDuration_</td>
            <td>uint128</td>
            <td>The new challenge duration</td>
          </tr>
        </tbody>
      </table>
      <h3 id="setestablishmentfeerate">setEstablishmentFeeRate</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          setEstablishmentFeeRate(uint128 establishmentFeeRate_){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <p>Set the establishment protocol fee rate</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>establishmentFeeRate_</td>
            <td>uint128</td>
            <td>The new establishment fee rate</td>
          </tr>
        </tbody>
      </table>
      <h3 id="setpenalizationamount">setPenalizationAmount</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          setPenalizationAmount(uint128 penalizationAmount_){" "}
          <span className="hljs-keyword">external</span> nonpayable
        </code>
      </pre>
      <p>Set the penalization amount for the protocol</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>penalizationAmount_</td>
            <td>uint128</td>
            <td>The new penalization amount</td>
          </tr>
        </tbody>
      </table>
      <h3 id="splitfunds">splitFunds</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          splitFunds(uint256 agreementID, uint128 contractorPercentage, uint128
          contracteePercentage) <span className="hljs-keyword">external</span>{" "}
          nonpayable
        </code>
      </pre>
      <p>
        Releases the escrowed funds accordingly to the percentages passed as
        parametersFor the moment the function is only callable by governance
        wich is a multisig wallet. However in the future it will only be
        callable by the Contractful DAO
      </p>
      <p>
        <em>
          Only integers can be passed as pecentages. The function does&#39;t
          calculate for decimal points
        </em>
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>The ID of the agreement</td>
          </tr>
          <tr>
            <td>contractorPercentage</td>
            <td>uint128</td>
            <td>
              The percentage of the escrowed funds to be released to the
              contractor
            </td>
          </tr>
          <tr>
            <td>contracteePercentage</td>
            <td>uint128</td>
            <td>
              The percentage of the escrowed funds to be released to the
              contractee
            </td>
          </tr>
        </tbody>
      </table>
      <h3 id="supportsinterface">supportsInterface</h3>
      <pre>
        <code className="lang-solidity">
          function supportsInterface(<span className="hljs-name">bytes4</span>{" "}
          interfaceId) external view returns (
          <span className="hljs-name">bool</span>)
        </code>
      </pre>
      <p>
        <em>See (IERC165 - supportsInterface).</em>
      </p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>interfaceId</td>
            <td>bytes4</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>bool</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="unfreezeagreements">unfreezeAgreements</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-function">
            <span className="hljs-keyword">function</span>
          </span>{" "}
          unfreezeAgreements() <span className="hljs-keyword">external</span>{" "}
          nonpayable
        </code>
      </pre>
      <p>Cancel a freeze, makes actions available again on all agreements*</p>
      <h3 id="usednonces">usedNonces</h3>
      <pre>
        <code className="lang-solidity">
          function usedNonces(<span className="hljs-name">uint256</span>)
          external view returns (<span className="hljs-name">bool</span>)
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>bool</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="useragreements">userAgreements</h3>
      <pre>
        <code className="lang-solidity">
          function userAgreements(<span className="hljs-name">address</span>,
          uint256) external view returns (
          <span className="hljs-name">uint256</span>)
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>address</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>_1</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="validatedescription">validateDescription</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-symbol">function</span> validateDescription(
          <span className="hljs-keyword">address </span>signer, uint8 v,{" "}
          <span className="hljs-keyword">bytes32 </span>r,{" "}
          <span className="hljs-keyword">bytes32 </span>s,{" "}
          <span className="hljs-keyword">string </span>description, uint256
          nonce) external nonpayable returns (
          <span className="hljs-keyword">bool)</span>
        </code>
      </pre>
      <p>checks whether the signer signed the description</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>signer</td>
            <td>address</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>v</td>
            <td>uint8</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>r</td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>s</td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>description</td>
            <td>string</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>nonce</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h4 id="returns">Returns</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_0</td>
            <td>bool</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h2 id="events">Events</h2>
      <h3 id="agreementactivated">AgreementActivated</h3>
      <pre>
        <code className="lang-solidity">
          event AgreementActivated(<span className="hljs-name">uint256</span>{" "}
          agreementID)
        </code>
      </pre>
      <p>Emitted after a agreement was activated</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="agreementcancelled">AgreementCancelled</h3>
      <pre>
        <code className="lang-solidity">
          event AgreementCancelled(<span className="hljs-name">uint256</span>{" "}
          agreementID)
        </code>
      </pre>
      <p>Emitted after a agreement was cancelled</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="agreementchallenged">AgreementChallenged</h3>
      <pre>
        <code className="lang-solidity">
          event AgreementChallenged(<span className="hljs-name">uint256</span>{" "}
          agreementID)
        </code>
      </pre>
      <p>Emitted after an agreement was challenged</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="agreementcreated">AgreementCreated</h3>
      <pre>
        <code className="lang-solidity">
          event AgreementCreated(uint256 agreementID,{" "}
          <span className="hljs-selector-tag">address</span> contractor,{" "}
          <span className="hljs-selector-tag">address</span> contractee)
        </code>
      </pre>
      <p>Emitted after a event was creted</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>contractor</td>
            <td>address</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>contractee</td>
            <td>address</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="fundsdeposited">FundsDeposited</h3>
      <pre>
        <code className="lang-solidity">
          event FundsDeposited(<span className="hljs-name">uint256</span>{" "}
          agreement, uint128 amount)
        </code>
      </pre>
      <p>Emitted after funds are deposited for the upcoming cycle</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreement</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>amount</td>
            <td>uint128</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="fundsmigrated">FundsMigrated</h3>
      <pre>
        <code className="lang-solidity">
          event FundsMigrated(<span className="hljs-name">uint256</span>{" "}
          agreement, uint128 amount)
        </code>
      </pre>
      <p>Emitted after funds were migrated</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreement</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>amount</td>
            <td>uint128</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="fundssplitted">FundsSplitted</h3>
      <pre>
        <code className="lang-solidity">
          event FundsSplitted(<span className="hljs-name">uint256</span>{" "}
          agreementID, uint128 contractorAmount, uint128 contracteeAmount)
        </code>
      </pre>
      <p>Emitted after the escrowd funds for an agreement were splitted</p>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agreementID</td>
            <td>uint256</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>contractorAmount</td>
            <td>uint128</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>contracteeAmount</td>
            <td>uint128</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="initialized">Initialized</h3>
      <pre>
        <code className="lang-solidity">
          event Initialized(<span className="hljs-name">uint8</span> version)
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>version</td>
            <td>uint8</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="paused">Paused</h3>
      <pre>
        <code className="lang-solidity">
          event Paused(<span className="hljs-name">address</span> account)
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>account</td>
            <td>address</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="roleadminchanged">RoleAdminChanged</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-symbol">event</span> RoleAdminChanged(
          <span className="hljs-keyword">bytes32 </span>indexed role,{" "}
          <span className="hljs-keyword">bytes32 </span>indexed
          previousAdminRole, <span className="hljs-keyword">bytes32 </span>
          indexed newAdminRole)
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              role <code>indexed</code>
            </td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>
              previousAdminRole <code>indexed</code>
            </td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>
              newAdminRole <code>indexed</code>
            </td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="rolegranted">RoleGranted</h3>
      <pre>
        <code className="lang-solidity">
          event RoleGranted(bytes32 indexed role,{" "}
          <span className="hljs-selector-tag">address</span> indexed account,{" "}
          <span className="hljs-selector-tag">address</span> indexed sender)
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              role <code>indexed</code>
            </td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>
              account <code>indexed</code>
            </td>
            <td>address</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>
              sender <code>indexed</code>
            </td>
            <td>address</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="rolerevoked">RoleRevoked</h3>
      <pre>
        <code className="lang-solidity">
          event RoleRevoked(bytes32 indexed role,{" "}
          <span className="hljs-selector-tag">address</span> indexed account,{" "}
          <span className="hljs-selector-tag">address</span> indexed sender)
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              role <code>indexed</code>
            </td>
            <td>bytes32</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>
              account <code>indexed</code>
            </td>
            <td>address</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>
              sender <code>indexed</code>
            </td>
            <td>address</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h3 id="unpaused">Unpaused</h3>
      <pre>
        <code className="lang-solidity">
          event Unpaused(<span className="hljs-name">address</span> account)
        </code>
      </pre>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>account</td>
            <td>address</td>
            <td>undefined</td>
          </tr>
        </tbody>
      </table>
      <h2 id="errors">Errors</h2>
      <h3 id="mg_address_zero">MG_ADDRESS_ZERO</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-keyword">error </span>MG_ADDRESS_ZERO()
        </code>
      </pre>
      <h3 id="mg_agreement_not_pending">MG_AGREEMENT_NOT_PENDING</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-keyword">error </span>MG_AGREEMENT_NOT_PENDING()
        </code>
      </pre>
      <h3 id="mg_amount_too_high">MG_AMOUNT_TOO_HIGH</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-keyword">error </span>MG_AMOUNT_TOO_HIGH()
        </code>
      </pre>
      <h3 id="mg_contractor_equals_contractee">
        MG_CONTRACTOR_EQUALS_CONTRACTEE
      </h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-keyword">error </span>
          MG_CONTRACTOR_EQUALS_CONTRACTEE()
        </code>
      </pre>
      <h3 id="mg_funds_already_secured">MG_FUNDS_ALREADY_SECURED</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-keyword">error </span>MG_FUNDS_ALREADY_SECURED()
        </code>
      </pre>
      <h3 id="mg_invalid_maturity_date">MG_INVALID_MATURITY_DATE</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-keyword">error </span>MG_INVALID_MATURITY_DATE()
        </code>
      </pre>
      <h3 id="mg_invalid_migration_period">MG_INVALID_MIGRATION_PERIOD</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-keyword">error </span>
          MG_INVALID_MIGRATION_PERIOD()
        </code>
      </pre>
      <h3 id="mg_invalid_percentages">MG_INVALID_PERCENTAGES</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-keyword">error </span>MG_INVALID_PERCENTAGES()
        </code>
      </pre>
      <h3 id="mg_invalid_token">MG_INVALID_TOKEN</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-keyword">error </span>MG_INVALID_TOKEN()
        </code>
      </pre>
      <h3 id="mg_not_ongoing">MG_NOT_ONGOING</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-keyword">error </span>MG_NOT_ONGOING()
        </code>
      </pre>
      <h3 id="mg_unauthorized">MG_UNAUTHORIZED</h3>
      <pre>
        <code className="lang-solidity">
          <span className="hljs-keyword">error </span>MG_UNAUTHORIZED()
        </code>
      </pre>
    </div>
  );
};

export default documentation;
