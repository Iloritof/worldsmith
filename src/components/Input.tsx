import { useState } from 'react';
import { Props } from './Main';

interface InputProps extends Props {
  label?: string;
  intialValue: number | string;
  inputType?: string;
  unit?: string;
}

const Input = ({
  label,
  inputType,
  unit,
  intialValue,
  children,
}: InputProps) => {
  const [editorActive, setEditorActive] = useState(false);
  const [value, setValue] = useState(intialValue);
  const [hintActive, setHintActive] = useState(false);
  // const [error, setError] = useState(false);

  return (
    <div className='attribute'>
      <div>
        {label ? <p className='h-sub'>{label}</p> : ''}
        {children ? (
          <>
            <button
              className='attribute__info'
              onClick={() => setHintActive((prev) => !prev)}
              title='Click for more info'
            >
              <svg
                width='79.374998'
                height='79.375'
                viewBox='0 0 79.374998 79.375'
              >
                <use href='#hint' />
              </svg>
            </button>
            <div
              className={`attribute__hint ${hintActive ? '' : 'sr-only'}`}
              aria-expanded={hintActive}
            >
              {children}
            </div>
          </>
        ) : (
          ''
        )}
      </div>
      <div>
        {editorActive ? (
          <input
            className='attribute__input h'
            type={inputType ? inputType : 'number'}
            autoFocus
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
          />
        ) : (
          <p className='attribute__value h6'>
            {value}{' '}
            {unit ? <span className='attribute__unit'>{unit}</span> : ''}
          </p>
        )}
        <button
          className='attribute__btn'
          onClick={() => {
            setEditorActive((prev) => !prev);
          }}
        >
          {editorActive ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default Input;
