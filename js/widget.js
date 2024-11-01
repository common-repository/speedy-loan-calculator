// currency formatting - add to number prototype
Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
 
(function ($) {
	"use strict";
	$(function () {
		var pc_validator = false;

		var calclulatePayment = function(loanAmount, loanLength, interestRate) {
			var num = loanAmount * (interestRate / 12);
			var pow1 = ( 1 + interestRate / 12 );
			var pow2 = (-1 * loanLength);
			var denom = (1 - (Math.pow(pow1, pow2)));
			return num/denom;
		};

		var calculate = function() {
			pc_validator = $("#pc_main_form").validate({
				submitHandler: function(form) {
					var loanAmount = $("#pc_loan_amt").val();
					var numMonths = $("#pc_loan_length").val();
					var interestRate = ($("#pc_loan_interest_rate").val())/100;

					$(".monthlyPaymentArea .value").html("$" + (calclulatePayment(loanAmount, numMonths, interestRate)).formatMoney(2, '.', ','));
				}.bind(this),
				invalidHandler: function() {
					$(".monthlyPaymentArea .value").html("");
				}.bind(this),
				rules: {
					pc_loan_interest_rate: {
						required: true,
						number: true
					},
					pc_loan_amt: {
						required: true,
						number: true
					}
				}
			});
		};

		var reset = function() {
			$("#pc_loan_amt").val('');
			$("#pc_loan_length").val('12');
			$("#pc_loan_interest_rate").val('');
			setTimeout(function() {
				if(pc_validator) {
					pc_validator.resetForm();
				}
			}.bind(this), 50);
			
		}

		// Setup listeners:
		$("#pc_main_form").submit(function (e) { e.preventDefault(); });
		$("#pc_calculate_button").click(calculate);
		$("#pc_reset").click(reset);
	});
}(jQuery));