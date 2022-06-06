import classes from "./searchitem.module.scss";

function SearchItem(props) {
  const {
    pisac,
    naziv,
    godina,
    opis,
    cena,
    valuta,
    slika,
    ISBN,
    oblast,
    jezik,
    kolicina,
  } = props.data;

  let cenaRsd = new Intl.NumberFormat("sr-RS", {
    style: "currency",
    currency: "RSD",
  }).format(cena);

  console.log(cenaRsd.fixed(2));
  return (
    <li className={classes.search_item_wrapper}>
      <div className={classes.search_item_container}>
        <div className={classes.search_item}>
          <div className={classes.search_img}>
            <img src={"/" + slika} alt={naziv} />
          </div>
          <div className={classes.search_description}>
            <p className={classes.pisac}>{pisac}</p>
            <h3 className={classes.naslov}>{naziv}</h3>
            <p className={classes.godina}>{godina}</p>
            <p className={classes.opis}>{opis.substring(0, 203)}</p>
            <div className={classes.book_item_btn}>
              <p>
                <span>
                  <img src={"/images/Detaljnije.svg"} alt="detaljnije" />
                </span>
                <span>Detaljnije</span>
              </p>
            </div>
          </div>
        </div>
        <div className={classes.search_item_basket_container}>
          <div className={classes.search_item_basket_price}>
            <h5>{cenaRsd}</h5>
          </div>

          <div className={classes.search_item_action_add_container}>
            <button className={classes.search_item_action_add_item}>
              <span className={classes.action_add_item_img}>
                <img src={"/" + "images/Korpa.svg"} />
              </span>
              Stavi u korpu
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
export default SearchItem;
