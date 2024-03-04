import { useState, Fragment } from 'react'
import { Switch } from '@headlessui/react'

function MySwitch({ text, enabled=false, setEnabled }) {

  return (
    <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button
          className={`${
            checked ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex h-5 w-9 items-center rounded-full`}
        >
          {/* <span className="sr-only">{text}</span> */}
          <span
            className={`${
              checked ? 'translate-x-4' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </button>
      )}
    </Switch>
  )
}

export default MySwitch;