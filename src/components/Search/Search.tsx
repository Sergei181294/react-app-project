import sass from "./search.module.scss"
import { SearchContext } from "../../App";
import React from "react";
import debounce from "lodash.debounce"
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";



export const Search = () => {

       const [value, setValue] = React.useState("")

       const { setSearchValue }: any = React.useContext(SearchContext)
       const inputRef = React.useRef<HTMLInputElement | null>(null)

       const onClickClear = () => {
              setSearchValue("");
              setValue("");
              if (inputRef.current !== null) {
                     inputRef.current.focus()
              }
       }

       const updateSearchValue = React.useCallback(
              debounce((str) => {
                     setSearchValue(str);
              }, 500), [],
       )

       const onChangeInput = (event: any) => {
              setValue(event.target.value);
              updateSearchValue(event.target.value)
       }

       return (
              <div className={sass.root}>
                     <SearchOutlined className={sass.icon} />
                     <input
                            ref={inputRef}
                            value={value}
                            onChange={onChangeInput}
                            className={sass.input}
                            placeholder="Поиск пиццы..." />
                     {value && <CloseOutlined
                            onClick={onClickClear}
                            className={sass.clearIcon} 
                            />}
              </div>

       )
}