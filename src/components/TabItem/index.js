import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }
  const activeClassTabName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassTabName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
