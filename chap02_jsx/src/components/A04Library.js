// A04Library.js
import $ from 'jquery';

function A04Library() {

  // $(document).ready(function () {
  //   $('#btn').click(function (evt) {
  //     const qty = $('#qty').val();
  //     const cost = $('#cost').val();
  //     const total = qty * cost;
  //     $('#total').html(total);
  //   })
  // });

  const clickEvent = function () {
    const qty = $('#qty').val();
    const cost = $('#cost').val();
    const total = qty * cost;
    $('#total').html(total);
  }

  return (
    <div>
      <h3>A04 Library</h3>

      <div>
        Qty: <input type="text" id="qty" className="form-control" />
        Cost: <input type="text" id="cost" className="form-control" />
        <br />
        Total: <span id="total"></span><br />
        <button id="btn" onClick={clickEvent}>CLICK</button>
      </div>
    </div>
  )
}
export default A04Library;
