<h3><?= $title ?></h3>
<div class="loan-calculator-wrapper gform_wrapper">
	<form id="pc_main_form">
		<label class="gfield_label" for="pc_loan_amt">Loan Amount</label>
		<input name="pc_loan_amt" id="pc_loan_amt" type="text" value="" class="full" ></input>
		<div class="half-area-wrapper">
			<div class="half">
				<label class="gfield_label" for="pc_loan_length">Loan Length</label>
				<select name="select" id="pc_loan_length">
					<option value="12" selected>12 Months</option> 
					<option value="24" >24 Months</option>
					<option value="36">36 Months</option>
					<option value="48">48 Months</option>
					<option value="60">60 Months</option>
					<option value="72">72 Months</option>
				</select>
			</div>

			<div class="half">
				<label class="gfield_label" for="pc_loan_interest_rate">Interest Rate (%)</label>
				<input name="pc_loan_interest_rate" id="pc_loan_interest_rate" type="text" value="" class="large"></input>
			</div>
			<div class="clear"></div>
		</div>

		<div class="monthlyPaymentArea">
			<div class="label"><div>Monthly Payment:</div></div>
			<div class="right"><div class="value"></div></div>
		</div>
		<input type="submit" class="button" id="pc_calculate_button" value="Calculate"></input>
		<input type="reset" class="button reset" id="pc_reset" calue="Reset"></button>
	</form>
</div>