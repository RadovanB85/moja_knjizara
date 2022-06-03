import classes from "./bookItem.module.scss";

function BookItem(props) {
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

  return (
    <li className={classes.book_item_wrapper}>
      <div className={classes.book_item_container}>
        <div className={classes.book_item}>
          <div className={classes.book_img}>
            <img src={"/" + slika} alt={naziv} />
          </div>
          <div className={classes.book_description}>
            <p>{pisac}</p>
            <h3>{naziv}</h3>
            <p>{godina}</p>
            <p>{opis.substring(0, 250)}</p>
          </div>
          <button className={classes.book_item_btn}>
            <p>
              <span>
                <img src={"/images/Detaljnije.svg"} alt="detaljnije" />
                Detaljnije
              </span>
            </p>
          </button>
        </div>
        <div className={classes.book_item_basket_container}>
          <div className={classes.book_item_basket_price}>
            <h5>{cenaRsd}</h5>
          </div>
          <div className={classes.book_item_basket_actions_container}>
            <p className={classes.book_item_action_item}>
              <span className={classes.book_item_action_item_increase}>
                <img
                  src={"/" + "images/Povecaj kolicinu.svg"}
                  alt="Povecaj kolicinu"
                />
              </span>
              <span className={classes.book_item_action_item_decrease}>
                <img
                  src={"/" + "images/Smanji kolicinu.svg"}
                  alt="Smanji kolicinu"
                />
              </span>
              <span className={classes.price_quantity}>{kolicina}</span>
              <span>kom</span>
            </p>
          </div>
          <div className={classes.book_item_action_delete_container}>
            <button className={classes.book_item_action_delete_item}>
              Izbaci iz korpe{" "}
              <span className={classes.action_delete_item_img}>
                <img src={"/" + "images/Brisi iz korpe.svg"} />
              </span>
            </button>
          </div>
          <div className={classes.book_item_action_book_total_container}>
            <p>{cenaRsd}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default BookItem;
