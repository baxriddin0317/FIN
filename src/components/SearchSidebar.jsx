import React, { useState } from "react";

export const SearchSidebar = () => {
  const [companySetting, setCompanySetting] = useState(false);
  const [manager, setManager] = useState(false);
  const [attributes, setAttributes] = useState(false);
  const [plans, setPlans] = useState(false);

  return (
    <div className="col-span-4 bg-gray-50 border border-slate-200 px-2 py-5 rounded">
      <form className="flex flex-col gap-6">
        {/* Saved Search */}
        <div className="pb-6 border-b border-slate-300">
          <h3 className="text-slate-800 dark:text-slate-100 font-semibold mb-3">
            Saved Search
          </h3>
          <label className="sr-only">select</label>
          <select className="form-select w-full">
            <option>Less than $20</option>
            <option>$20 - $40</option>
            <option>$40 - $80</option>
            <option>More than $80</option>
          </select>

          <h3 className="text-slate-800 dark:text-slate-100 font-semibold mb-3">
            Saved Search
          </h3>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <input type="radio" id="radio1" name="layout" />
              <label htmlFor="radio1">Grid View</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" id="radio2" name="layout" />
              <label htmlFor="radio1">List View</label>
            </div>
          </div>
        </div>

        {/* plan inputs */}
        <div className="space-y-3 border-b border-slate-300 pb-6">
          {/* btns */}
          <div className="flex items-center justify-center gap-1 text-sm">
            <button
              type="button"
              className="btn bg-slate-700 border-slate-200 hover:bg-slate-800 text-white capitalize"
            >
              search
            </button>
            <button
              type="button"
              className="btn bg-indigo-700 border-slate-200 hover:bg-indigo-800 text-white capitalize"
            >
              save / manage
            </button>
            <button
              type="button"
              className="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500 capitalize"
            >
              clear
            </button>
            <button
              type="button"
              className="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500 capitalize"
            >
              hide
            </button>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              plan name
            </label>
            <input
              className="form-input w-full"
              type="text"
              placeholder="Plan Name"
            />
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              plan group
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Select Group</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              plan type
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Select Type</option>
              <option>type 2</option>
              <option>type 3</option>
              <option>type 4</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              minimum plan size <span className="lowercase">(millions)</span>
            </label>
            <input
              className="form-input w-full"
              type="text"
              placeholder="Plan Size (min)"
            />
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              maximum plan size <span className="lowercase">(millions)</span>
            </label>
            <input
              className="form-input w-full"
              type="text"
              placeholder="Plan Size (max)"
            />
          </div>
        </div>

        {/* address */}
        <div className="space-y-3 border-b border-slate-300 pb-6">
          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              City
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Select City</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              U.S. Metro
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Select Metro</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              State
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Select State</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              U.S. Region
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Click to Select Regions</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              Country
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Select Country</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>
        </div>

        {/* consultant */}
        <div className="space-y-3 border-b border-slate-300 pb-6">
          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              Lead consultant
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Select Lead Consultant</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              Consultant
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Select Consultant</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              Consultant type
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Consultant Capacity</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div>
            <div className="flex items-center">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400 dark:bg-slate-700" htmlFor="company-toggle">
                  <span className="bg-white shadow-sm" aria-hidden="true"></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 dark:text-slate-500 italic ml-2">{!companySetting ? 'On' : 'Off'}</div>
            </div>
            <div className="text-sm dark:text-slate-500 italic mt-3">Only No or Unknown Consultant?</div>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              manager in roster
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Select Manager</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div>
            <div className="flex items-center">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle2"
                  className="sr-only"
                  checked={manager}
                  onChange={() => setManager(!manager)}
                />
                <label className="bg-slate-400 dark:bg-slate-700" htmlFor="company-toggle2">
                  <span className="bg-white shadow-sm" aria-hidden="true"></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 dark:text-slate-500 italic ml-2">{!manager ? 'ANY' : 'ALL'}</div>
            </div>
            <div className="text-sm dark:text-slate-500 italic mt-3">ANY or ALL Managers selected?</div>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              geographic region in roster
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Select Geographic Region</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              Style in roster
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Click to select style or tye name</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              Attributes in roster
            </label>
            <input
              className="form-input w-full"
              type="text"
              placeholder=""
            />
          </div>

          <div>
            <div className="flex items-center">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle3"
                  className="sr-only"
                  checked={attributes}
                  onChange={() => setAttributes(!attributes)}
                />
                <label className="bg-slate-400 dark:bg-slate-700" htmlFor="company-toggle3">
                  <span className="bg-white shadow-sm" aria-hidden="true"></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 dark:text-slate-500 italic ml-2">{!attributes ? 'ANY' : 'ALL'}</div>
            </div>
            <div className="text-sm dark:text-slate-500 italic mt-3">ANY or ALL Managers selected?</div>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              Asset class
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Select Asset Class</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-slate-800 font-medium mb-1 capitalize">
              Placement Policy
            </label>
            <select className="form-select w-full">
              <option value="" selected disabled>Select Placement Policy</option>
              <option>group 2</option>
              <option>group 3</option>
              <option>group 4</option>
            </select>
          </div>

          <div>
            <div className="flex items-center">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle4"
                  className="sr-only"
                  checked={plans}
                  onChange={() => setPlans(!plans)}
                />
                <label className="bg-slate-400 dark:bg-slate-700" htmlFor="company-toggle4">
                  <span className="bg-white shadow-sm" aria-hidden="true"></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 dark:text-slate-500 italic ml-2">{!plans ? 'NO' : 'YES'}</div>
            </div>
            <div className="text-sm dark:text-slate-500 italic mt-3">Only show Plans with Return Data</div>
          </div>

        </div>

        {/* btns */}
        <div className="flex items-center justify-center gap-1 text-sm">
          <button
            type="submit"
            className="btn bg-slate-700 border-slate-200 hover:bg-slate-800 text-white capitalize"
          >
            search
          </button>
          <button
            type="button"
            className="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500 capitalize"
          >
            clear
          </button>
        </div>

      </form>
    </div>
  );
};
