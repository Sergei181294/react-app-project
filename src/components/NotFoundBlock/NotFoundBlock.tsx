import scss from "./NotFoundBlock.module.scss"


export const NotFoundBlock = () => {
       return (
              <div className={scss.root}>
                     <h1>
                            <span>😭</span>
                            <br />
                            Ничего не найдено
                     </h1>
                     <p className={scss.description}>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
              </div>
       )
}