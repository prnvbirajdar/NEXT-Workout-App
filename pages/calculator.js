import React from "react";
import Navbar from "../components/Navbar";
import { Card, CardBody } from "@windmill/react-ui";
import Footer from "../components/Footer";
import Head from "next/head";
import { Correct } from '../components/Icons/Icons';
import DatePicker from "react-datepicker";

const Calculator = () => {
  //grabs today's date
  const [startDate, setStartDate] = React.useState(new Date());
  //the strip of date seen on home page
  const DateButton = ({ value }) => (
    <p className="z-0 select-none py-1 px-4 w-screen text-center text-white bg-indigo-700 rounded font-medium md:text-lg shadow">
      {value}
    </p>
  );

  const [weight, setWeight] = React.useState();
  const [displayWeights, setDisplayWeights] = React.useState({});


  function calculate(weight) {
    // Subtract 45 and divide by 2
    let calculatedWeight = (weight - 45) / 2;
    const counts = { 45: 0, 35: 0, 25: 0, 10: 0, 5: 0, 2: 0 };

    // Define an array of plate weights to check
    const plateWeights = [45, 35, 25, 10, 5, 2.5];

    // Iterate over the plate weights and calculate the number of each needed
    plateWeights.map((res) => {
      if (calculatedWeight >= res) {
        const count = Math.floor(calculatedWeight / res);
        calculatedWeight = calculatedWeight % res;

        switch (res) {
          case 45:
            counts[45] = count;
            break;
          case 35:
            counts[35] = count;
            break;
          case 25:
            counts[25] = count;
            break;
          case 10:
            counts[10] = count;
            break;
          case 5:
            counts[5] = count;
            break;
          case 2.5:
            counts[2] = count;
            break;
        }
      }
    });

    for (const key in counts) {
      if (counts[key] === 0) {
        delete counts[key];
      }
    }

    setDisplayWeights(counts)
  }

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <section className="relative min-h-screen  overflow-hidden">
        <Navbar />
        <DatePicker
          selected={startDate}
          name="startDate"
          dateFormat="PPPP"
          closeOnScroll={true}
          customInput={<DateButton />}
        />

        <div className="pb-20 dark:bg-black transition-colors">
          <div className="flex justify-center mt-10 pt-2">
            <div className="w-full sm:w-1/2 lg:w-1/3 text-gray-600 dark:text-gray-400">
              <Card className='shadow'>
                <CardBody>
                  <h3 className="mb-4 font-semibold text-gray-600 dark:text-gray-300 text-center text-xl">
                    Plates Calculator
                  </h3>
                  <p className='text-center mb-2'>Enter the weight you're planning to lift:</p>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    calculate(weight)
                  }}
                    className='flex justify-center space-x-4'>
                    <input
                      className="py-2 rounded w-10/12 sm:w-7/12 border text-black text-center"
                      type="number"
                      name="weight"
                      required
                      min={50}
                      max={1500}
                      step={5}
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                    <Correct
                      aria-label="correct" />
                  </form>
                  <div className="flex flex-col justify-around pt-2 sm:px-2 sm:mx-4 mt-4">
                    {Object.entries(displayWeights).reverse().map(([key, value]) => (
                      <div key={key} className="flex justify-between p-2 transition bg-gray-50 dark:bg-black rounded mb-3">
                        <label>{key === "2" ? "2.5" : key} lbs</label>
                        <p className=" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                          {value} {value === 1 ? 'plate' : 'plates'}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
              <p className='text-xs mt-2 mx-4 sm:mx-0'>* The weights mentioned above are for one side of a 45 lbs bar.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </React.Fragment>
  );
};

export default Calculator;

