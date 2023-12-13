class TrackedItem extends Item {
  constructor(serialN, tag, state, value) {
    super();
    this._serialN = serialN;
    this._tag = tag;
    this._state = state;
    this._value = value;
  }


  get value() { return this._value; };
  set value(value) { this._value = value; };
  get serialN() { return this._serialN; };

  set serialN(value) { this._serialN = value; };
  get state() { return this._state; };

  set state(value) { this._state = value; };
  get tag() { return this._tag; };

  set tag(value) { this._tag = value; };
}