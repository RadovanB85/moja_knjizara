import classes from "./form.module.scss";

function FormList(props) {
  return (
    <div className={classes.search_container}>
      <div className={classes.search_container_headline_container}>
        <div className={classes.headline_item}>
          <img src="/images/Filteri.svg" alt="filter" />
          <h4>Filteri</h4>
        </div>
        <div className={classes.headline_button}>
          <img src="/images/Otvaranje liste.svg" alt="otvaranje liste" />
        </div>
      </div>
      <form className={classes.search_form_wrapper}>
        <div className={classes.search_form_container}>
          <label htmlFor="naziv">Naziv</label>
          <input list="naziv" name="naziv" id="naziv" size="30" />
          <datalist id="naziv">
            <option value="JavaScript" />;
            <option value="React" />;
          </datalist>
        </div>
        <div className={classes.search_form_container}>
          <label htmlFor="oblasst">Oblast</label>
          <input type="text" list="oblast" name="oblast" id="oblast" />
          <datalist id="oblast">
            <option value="c++" />;
            <option value="javascript" />;
          </datalist>
        </div>
        <div className={classes.search_form_container}>
          <label htmlFor="jezik">Jezik</label>
          <input list="jezik" name="jezik" id="jezik" size="30" />
          <datalist id="jezik">
            <option value="engleski" />;
            <option value="srpski" />;
          </datalist>
        </div>
        <div className={classes.search_form_container}>
          <label htmlFor="cena">Najvisa cena</label>
          <input
            type="number"
            list="cena"
            name="cena"
            id="cena"
            size="30"
            min="0"
          />
          <datalist id="cena">
            <option value="2000">2000</option>;
            <option value="2500">2500</option>;
          </datalist>
        </div>
        <div className={classes.search_form_container}>
          <label htmlFor="godina">Godina izdanja</label>
          <div>
            <div>
              <p>od</p>
              <input
                type="number"
                list="godina"
                name="godina"
                id="godina"
                size="5"
                min="0"
              />
              <datalist id="godina">
                <option value="2000" />;
                <option value="2001" />;
              </datalist>
            </div>
            <div>
              <p>do</p>
              <input
                type="number"
                list="godiina"
                name="godina"
                id="godina"
                size="30"
                min="0"
              />
              <datalist id="godina">
                <option value="2002" />;
                <option value="2003" />;
              </datalist>
            </div>
          </div>
        </div>
      </form>
      <button className={classes.form_search_btn}>
        <p>
          Trazi
          <span className={classes.btn_img}>
            <img src={"/images/lupa.svg"} alt="lupa" />
          </span>
        </p>
      </button>
    </div>
  );
}

export default FormList;
