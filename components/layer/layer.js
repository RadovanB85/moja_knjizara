import classes from "./layer.module.scss";

function LayerSection() {
  return (
    <div className={classes.layer_section_wrapper}>
      <div className={classes.layer_section_container}>
        <div className={classes.layer_logo_text_container}>
          <div className={classes.layer_logo_item}>
            <img src="/images/Sortiranje.svg" alt="sortiranje" />
          </div>
          <div className={classes.layer_text_item}>
            <h4>Sortiranje</h4>
          </div>
        </div>
        <div className={classes.layer_actions}>
          <label htmlFor="sortiranje"></label>
          <input
            type="sortiranje"
            list="sortiranje"
            name="sortiranje"
            id="sortiranje"
            size="30"
            min="0"
          />
          <datalist id="sortiranje">
            <option value="Cena rastuca" />;
            <option value="Cena opadajuca" />;
          </datalist>
        </div>
      </div>
    </div>
  );
}

export default LayerSection;
