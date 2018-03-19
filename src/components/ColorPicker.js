
import React, { PropTypes } from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

import TextField from 'material-ui/TextField'

import { DEFAULT_CONVERTER, converters } from '../transformers'
import PickerDialog from './PickerDialog'

const ColorPicker = ({
  // ColorPicker
  onChange,
  convert,
  value,

  // Text field
  name,
  id,
  hintText,
  placeholder,
  floatingLabelText,
  label,
  TextFieldProps,

  // State
  showPicker,
  setShowPicker
}) => (
  <div>
    <TextField
      name={name}
      id={id}
      value={value}
      label={floatingLabelText || label}
      placeholder={hintText || placeholder}
      onClick={() => setShowPicker(true)}
      onChange={e => {
        onChange(e.target.value)
        }
      }
      InputProps={{style: {color: value}}}
    />
    {showPicker && (
      <PickerDialog
        value={value}
        onClick={() => {
          setShowPicker(false)
          onChange(value)
        }}
        onChange={c => {
          onChange(converters[convert](c))
        }}
      />
    )}
  </div>
)

ColorPicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  convert: PropTypes.oneOf(Object.keys(converters))
}

ColorPicker.defaultProps = {
  convert: DEFAULT_CONVERTER
}

const makeColorPicker = compose(
  withState('showPicker', 'setShowPicker', false)
)

export default makeColorPicker(ColorPicker)
