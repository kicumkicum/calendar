import React, { Component } from 'react';
import './App.css';

import DateComponent from './components/date';
import {Arrow, ArrowType} from './components/arrow';
import WeekDays from './components/week/week';

class App extends Component {
  render() {
  	const locale = navigator.language;
    return (
	    <div id="cal">
		    <div class="header">
			    <Arrow type={ ArrowType.PREV }/>
			    <DateComponent date={ new Date() } locale={ locale }/>
			    <Arrow type={ ArrowType.NEXT }/>
		    </div>
		    <WeekDays locale={ locale }/>
		    <div id="cal-frame">
			    <table class="curr">
				    <tbody>
				    <tr><td class="nil"></td><td class="nil"></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
				    <tr><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td class="today">11</td><td>12</td></tr>
				    <tr><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td></tr>
				    <tr><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr>
				    <tr><td>27</td><td>28</td><td>29</td><td>30</td><td class="nil"></td><td class="nil"></td><td class="nil"></td></tr>
				    </tbody>
			    </table>
		    </div>
	    </div>
    );
  }
}

export default App;
