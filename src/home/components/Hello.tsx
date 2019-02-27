import Vue , { CreateElement }from 'vue'
import  { Button,Steps } from 'iview';
import Component from 'vue-class-component'
import {IObservablePromise} from 'hoolinks/observable-promise';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
import { MockEntity } from '../model/mockEntity';
// import { Button, Input, Poptip } from "ant-design-vue";
@Component({
  components:{Button},
})
export default class HelloWorld extends Vue {
  msg: string = 'Welcome to Your Vue-Typescript App'
  mounted () {
  }
  //          {/* 
  // // @ts-ignore */}
  render(h:CreateElement){
    // @ts-ignore
      return(
        <div>
          <p>{this.msg}</p>
           <Button>demo示例</Button>
        </div>  
      )
  }
}

