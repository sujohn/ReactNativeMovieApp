import JSModel from 'react-native-jsmodel';


export default class MockModel extends JSModel {
    /*
    constructor(json) {
        super(json);
    }
    */
   constructor(json) {
        super(json);
        if (this.validate(json)) {
            this.keyMapper({ firstName: 'first_name', lastName: 'last_name' });
        }
    }

    name() {
        return this.first_name + ' ' + this.last_name;
    }
   
}